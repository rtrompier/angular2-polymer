System.register(['angular2/core', 'angular2/testing', "angular2/router", "../../services/hero.service", "../../mock/mock-heroes", "./dashboard.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, testing_1, router_1, hero_service_1, mock_heroes_1, dashboard_component_1;
    var FakeRouter, FakeHeroService, FakeRouterParams;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (mock_heroes_1_1) {
                mock_heroes_1 = mock_heroes_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            }],
        execute: function() {
            FakeRouter = (function () {
                function FakeRouter() {
                }
                FakeRouter.prototype.navigate = function () { };
                return FakeRouter;
            }());
            FakeHeroService = (function () {
                function FakeHeroService() {
                }
                FakeHeroService.prototype.getHeroes = function () {
                    return new Promise(function (resolve) {
                        resolve([
                            { id: 10, name: 'toto', phone: '0123456789' },
                            { id: 11, name: 'tata', phone: '0123456789' },
                            { id: 12, name: 'titi', phone: '0123456789' }
                        ]);
                    });
                };
                return FakeHeroService;
            }());
            FakeRouterParams = (function () {
                function FakeRouterParams() {
                }
                FakeRouterParams.prototype.get = function (val) { };
                return FakeRouterParams;
            }());
            testing_1.describe('Dashboard Component test suite', function () {
                var fixture;
                var component;
                testing_1.beforeEachProviders(function () { return [
                    core_1.provide(router_1.Router, { useClass: FakeRouter }),
                    core_1.provide(hero_service_1.HeroService, { useClass: FakeHeroService }),
                    core_1.provide(router_1.RouteParams, { useClass: FakeRouterParams })
                ]; });
                testing_1.beforeEach(testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(dashboard_component_1.DashboardComponent)
                        .then(function (f) { return fixture = f; });
                }));
                testing_1.beforeEach(function (done) {
                    component = fixture.componentInstance;
                    component.ngOnInit().then(function () { return done(); });
                });
                testing_1.it('should have 3 heroes', function () {
                    testing_1.expect(component.heroes.length).toBe(3);
                });
                testing_1.it('should select a hero', function () {
                    component.gotoDetail(mock_heroes_1.HEROES[0]);
                    //Expected what ? Test E2E ?
                });
            });
        }
    }
});
//# sourceMappingURL=dashboard.component.spec.js.map