import {Injectable} from 'angular2/core';
import {HEROES} from '../mock/mock-heroes';
import {Hero} from '../model/hero';

@Injectable()
export class HeroService {
    allHeroes: Hero[];

    constructor() {
        this.allHeroes = HEROES;
    }
    getHeroes() {
        return Promise.resolve(this.allHeroes);
    }

    // See the "Take it slow" appendix
    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(()=>resolve(this.allHeroes), 2000) // 2 seconds
        );
    }

    getHero(id: number) {
        return Promise.resolve(this.allHeroes).then(
            heroes => heroes.filter(hero => hero.id === id)[0]
        );
    }

    saveHero(hero) {
        let index = this.allHeroes.map(hero => hero.id).indexOf(hero.id);
        this.allHeroes[index] = hero;
    }

}