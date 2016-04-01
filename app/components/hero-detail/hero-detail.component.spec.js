System.register(['angular2/core', 'angular2/testing', "angular2/router", './hero-detail.component', "../../services/hero.service", "../../mock/mock-heroes"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, testing_1, router_1, hero_detail_component_1, hero_service_1, mock_heroes_1;
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
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (mock_heroes_1_1) {
                mock_heroes_1 = mock_heroes_1_1;
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
                FakeHeroService.prototype.getHero = function (id) {
                    return new Promise(function (resolve) {
                        resolve(mock_heroes_1.HEROES[0]);
                    });
                };
                return FakeHeroService;
            }());
            FakeRouterParams = (function () {
                function FakeRouterParams() {
                }
                FakeRouterParams.prototype.get = function (val) {
                    return '12';
                };
                return FakeRouterParams;
            }());
            testing_1.describe('Hero Detail Component test suite', function () {
                var fixture;
                var component;
                testing_1.beforeEachProviders(function () { return [
                    core_1.provide(router_1.Router, { useClass: FakeRouter }),
                    core_1.provide(hero_service_1.HeroService, { useClass: FakeHeroService }),
                    core_1.provide(router_1.RouteParams, { useClass: FakeRouterParams })
                ]; });
                testing_1.beforeEach(testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(hero_detail_component_1.HeroDetailComponent)
                        .then(function (f) { return fixture = f; });
                }));
                testing_1.beforeEach(function (done) {
                    component = fixture.componentInstance;
                    component.ngOnInit().then(function () { return done(); }, function () { return done(); });
                });
                testing_1.it('should return correct hero 0', function () {
                    testing_1.expect(component.hero).toEqual(mock_heroes_1.HEROES[0]);
                });
            });
        }
    }
});
//# sourceMappingURL=hero-detail.component.spec.js.map