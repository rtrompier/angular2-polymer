import {provide} from 'angular2/core';
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
import {Router, RouteParams} from "angular2/router";
import {Observable} from 'rxjs/Observable';

import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from "../../services/hero.service";
import {HEROES} from "../../mock/mock-heroes";

class FakeRouter {
    navigate() {}
}

class FakeHeroService {
    getHero(id) {
        return new Promise(resolve => {
            resolve(HEROES[0]);
        })
    }
}

class FakeRouterParams {
    get(val) {
        return 0;
    }
}

describe('Hero Detail Component test suite', () => {
    let fixture: ComponentFixture;
    let component: HeroDetailComponent;

    beforeEachProviders(() => [
        provide(Router, {useClass: FakeRouter}),
        provide(HeroService, {useClass: FakeHeroService}),
        provide(RouteParams, {useClass: FakeRouterParams})
    ]);

    beforeEach(injectAsync([TestComponentBuilder], tcb =>
        tcb.createAsync(HeroDetailComponent)
            .then(f => fixture = f)
    ));

    beforeEach(done => {
        component = fixture.componentInstance;
        component.ngOnInit().then(() => done());
    });


    it('should return correct hero 0', () => {
        expect(component.hero).toEqual(HEROES[0]);
    });

});