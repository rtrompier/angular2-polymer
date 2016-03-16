import { Component, OnInit } from 'angular2/core';
import {RouteParams} from 'angular2/router';

import { HeroService } from '../../services/hero.service';
import {Hero} from '../../model/hero';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/components/hero-detail/hero-detail.component.html',
    inputs: ['hero']
})

export class HeroDetailComponent {
    hero:Hero;

    constructor(private _heroService:HeroService,
                private _routeParams:RouteParams) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._heroService.getHero(id)
            .then(hero => this.hero = hero);
    }

    goBack() {
        window.history.back();
    }
}