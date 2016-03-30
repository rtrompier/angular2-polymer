import {describe, it, expect} from 'angular2/testing';
import {HeroService} from "./hero.service";
import {HEROES} from "../mock/mock-heroes";


describe('HeroService test suite', () => {
    it('should return heroes when getHeroes() is called', (done) => {
        let service: HeroService = new HeroService();

        service.getHeroes().then(data => {
            expect(data.length).toBe(HEROES.length);
            done();
        })
    });

    it('should return heroes when getHeroesSlowly() is called', (done) => {
        let service: HeroService = new HeroService();

        service.getHeroesSlowly().then(data => {
            expect(data.length).toBe(HEROES.length);
            done();
        })
    });

    it('should return a hero when getHero() is called', (done) => {
        let service: HeroService = new HeroService();

        service.getHero(11).then(data => {
            expect(data).toEqual(HEROES[0]);
            done();
        })
    });
});