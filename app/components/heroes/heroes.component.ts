import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';
import {HeroService} from '../../services/hero.service';
import {Hero} from '../../model/hero';

@Component({
    selector: 'my-heroes',
    styleUrls:  ['app/components/heroes/heroes.component.css'],
    templateUrl: 'app/components/heroes/heroes.component.html',
    directives: [HeroDetailComponent],
})

export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(
        private _router: Router,
        private _heroService: HeroService) { }

    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero) { this.selectedHero = hero; }

    gotoDetail() {
        this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
}

