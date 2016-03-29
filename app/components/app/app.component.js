System.register(['angular2/core', 'angular2/router', 'angular2/http', 'angular2/platform/browser', '../../services/hero.service', '../../services/user.service', '../dashboard/dashboard.component', '../heroes/heroes.component', '../hero-detail/hero-detail.component', '../users/users.component', '../map/map.component'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, browser_1, hero_service_1, user_service_1, dashboard_component_1, heroes_component_1, hero_detail_component_1, users_component_1, map_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (heroes_component_1_1) {
                heroes_component_1 = heroes_component_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (users_component_1_1) {
                users_component_1 = users_component_1_1;
            },
            function (map_component_1_1) {
                map_component_1 = map_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(titleProvider) {
                    this.title = 'Tour of Heroes';
                    titleProvider.setTitle(this.title);
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        styleUrls: ['app/components/app/app.component.css'],
                        template: "\n        <h1>{{title}}</h1>\n        <nav>\n            <a  [routerLink]=\"['Dashboard']\">Dashboard</a>\n            <a [routerLink]=\"['Heroes']\">Heroes</a>\n            <a [routerLink]=\"['Users']\">Users</a>\n            <a [routerLink]=\"['Map']\">Map</a>\n        </nav>\n        <router-outlet></router-outlet>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES, heroes_component_1.HeroesComponent],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            http_1.HTTP_PROVIDERS,
                            hero_service_1.HeroService,
                            user_service_1.UserService
                        ],
                        viewProviders: [browser_1.Title]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/heroes',
                            name: 'Heroes',
                            component: heroes_component_1.HeroesComponent
                        },
                        {
                            path: '/detail/:id',
                            name: 'HeroDetail',
                            component: hero_detail_component_1.HeroDetailComponent
                        },
                        {
                            path: '/users',
                            name: 'Users',
                            component: users_component_1.UsersComponent
                        },
                        {
                            path: '/map',
                            name: 'Map',
                            component: map_component_1.MapComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [browser_1.Title])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map