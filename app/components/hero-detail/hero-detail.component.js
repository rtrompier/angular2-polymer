System.register(['angular2/core', 'angular2/router', 'angular2/common', '../../services/hero.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, common_1, hero_service_1;
    var HeroDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            HeroDetailComponent = (function () {
                function HeroDetailComponent(_heroService, _routeParams, _fb) {
                    this._heroService = _heroService;
                    this._routeParams = _routeParams;
                    this._fb = _fb;
                }
                HeroDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get('id');
                    if (!!id) {
                        var heroId = +id;
                        return this._heroService.getHero(heroId)
                            .then(function (hero) {
                            _this.hero = hero;
                            _this.heroForm = _this._fb.group({
                                heroName: _this._fb.control(hero.name)
                            });
                        });
                    }
                    else {
                        return Promise.reject('No hero');
                    }
                };
                HeroDetailComponent.prototype.ngOnChanges = function () {
                    if (this.hero) {
                        this.heroForm = this._fb.group({
                            heroName: this._fb.control(this.hero.name)
                        });
                    }
                };
                HeroDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                HeroDetailComponent.prototype.save = function () {
                    var updatedHero = Object.assign(this.hero, {
                        name: this.heroForm.value.heroName,
                    });
                    this._heroService.saveHero(updatedHero);
                };
                HeroDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-hero-detail',
                        templateUrl: 'app/components/hero-detail/hero-detail.component.html',
                        inputs: ['hero']
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.RouteParams, common_1.FormBuilder])
                ], HeroDetailComponent);
                return HeroDetailComponent;
            }());
            exports_1("HeroDetailComponent", HeroDetailComponent);
        }
    }
});
//# sourceMappingURL=hero-detail.component.js.map