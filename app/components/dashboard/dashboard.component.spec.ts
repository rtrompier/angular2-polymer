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
import {HeroService} from "../../services/hero.service";
import {HEROES} from "../../mock/mock-heroes";
import {DashboardComponent} from "./dashboard.component";

class FakeRouter {
    navigate() {}
}

class FakeHeroService {
    getHeroes() {
        return new Promise(resolve => {
           resolve([
               {id:10, name:'toto', phone:'0123456789'},
               {id:11, name:'tata', phone:'0123456789'},
               {id:12, name:'titi', phone:'0123456789'}
           ]);
        })
    }
}

class FakeRouterParams {
    get(val) {}
}

describe('Dashboard Component test suite', () => {
    let fixture: ComponentFixture;
    let component: DashboardComponent;

    beforeEachProviders(() => [
        provide(Router, {useClass: FakeRouter}),
        provide(HeroService, {useClass: FakeHeroService}),
        provide(RouteParams, {useClass: FakeRouterParams})
    ]);

    beforeEach(injectAsync([TestComponentBuilder], tcb =>
        tcb.createAsync(DashboardComponent)
            .then(f => fixture = f)
    ));

    beforeEach(done => {
        component = fixture.componentInstance;
        component.ngOnInit().then(() => done());
    });


    it('should have 3 heroes', () => {
        expect(component.heroes.length).toBe(3);
    });

    it('should select a hero', () => {
        component.gotoDetail(HEROES[0]);
        //Expected what ? Test E2E ?
    });

});