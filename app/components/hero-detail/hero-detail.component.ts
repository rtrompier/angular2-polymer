import {Component, OnInit, Input, OnChanges} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {FormBuilder, ControlGroup, Control} from 'angular2/common';

import { HeroService } from '../../services/hero.service';
import {Hero} from '../../model/hero';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/components/hero-detail/hero-detail.component.html',
    inputs: ['hero']
})

export class HeroDetailComponent implements OnInit, OnChanges {
    hero:Hero;
    heroForm: ControlGroup;

    constructor(private _heroService:HeroService,
                private _routeParams:RouteParams,
                private _fb: FormBuilder) {

    }

    ngOnInit() {
        let id = this._routeParams.get('id');
        if (!!id) {
            let heroId = +id;
            return this._heroService.getHero(heroId)
                .then(hero => {
                    this.hero = hero;
                    this.heroForm = this._fb.group({
                        heroName: this._fb.control(hero.name)
                    })
                });
        } else {
            return Promise.reject('No hero');
        }
    }

    ngOnChanges() {
        if (this.hero) {
            this.heroForm = this._fb.group({
                heroName: this._fb.control(this.hero.name)
            })
        }
    }

    goBack() {
        window.history.back();
    }

    save() {
        let updatedHero = Object.assign(this.hero,
            {
                name: this.heroForm.value.heroName,
            }
        );
        this._heroService.saveHero(updatedHero);
    }
}