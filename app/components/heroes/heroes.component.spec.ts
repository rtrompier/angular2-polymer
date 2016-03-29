import {provide} from 'angular2/core';
import {Injectable} from 'angular2/core';
import {
    describe,
    it,
    expect,
    inject,
    injectAsync,
    beforeEach,
    beforeEachProviders,
    TestComponentBuilder,
    ComponentFixture
} from 'angular2/testing';
import {provide} from 'angular2/core';

import {HeroesComponent} from './heroes.component';
import {HeroService} from "../../services/hero.service";
import {Router, RouteParams} from "angular2/router";
import {Observable} from 'rxjs/Observable';
import {HeroesComponent} from "./heroes.component";

class FakeRouter {
    navigate() {}
}

class FakeHeroService {
    getHeroes() {
        return new Promise(resolve => {
           resolve(['toto', 'tata']);
        })
    }
}

class FakeRouterParams {
    get(val) {}
}

describe('Heroes Component test suite', () => {
    let fixture: ComponentFixture;
    let component: HeroesComponent;

    beforeEachProviders(() => [
        provide(Router, {useClass: FakeRouter}),
        provide(HeroService, {useClass: FakeHeroService}),
        provide(RouteParams, {useClass: FakeRouterParams})
    ]);

    beforeEach(injectAsync([TestComponentBuilder], tcb =>
        tcb.createAsync(HeroesComponent)
            .then(f => fixture = f)
    ));

    beforeEach(done => {
        component = fixture.componentInstance;
        done();
    });


    it('should have correct data', () => {
        expect(component.getHeroes()).toEqual(['toto', 'tata']);
    })
})