System.register(['angular2/testing', "./hero.service", "../mock/mock-heroes"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, hero_service_1, mock_heroes_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (mock_heroes_1_1) {
                mock_heroes_1 = mock_heroes_1_1;
            }],
        execute: function() {
            testing_1.describe('HeroService', function () {
                testing_1.it('should return heroes when getHeroes() is called', function (done) {
                    var service = new hero_service_1.HeroService();
                    service.getHeroes().then(function (data) {
                        testing_1.expect(data.length).toBe(mock_heroes_1.HEROES.length);
                        done();
                    });
                });
                testing_1.it('should return heroes when getHeroesSlowly() is called', function (done) {
                    var service = new hero_service_1.HeroService();
                    service.getHeroesSlowly().then(function (data) {
                        testing_1.expect(data.length).toBe(mock_heroes_1.HEROES.length);
                        done();
                    });
                });
                testing_1.it('should return a hero when getHero() is called', function (done) {
                    var service = new hero_service_1.HeroService();
                    service.getHero(11).then(function (data) {
                        testing_1.expect(data).toEqual(mock_heroes_1.HEROES[0]);
                        done();
                    });
                });
            });
        }
    }
});
//# sourceMappingURL=hero.service.spec.js.map