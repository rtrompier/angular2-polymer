import { Component }       from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { Http, Headers, HTTP_PROVIDERS } from 'angular2/http';

import { HeroService }     from '../../services/hero.service';
import { UserService }     from '../../services/user.service';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeroesComponent } from '../heroes/heroes.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { UsersComponent } from '../users/users.component';
import { MapComponent } from '../map/map.component';

@Component({
    selector: 'my-app',
    styleUrls: ['app/components/app/app.component.css'],
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a  [routerLink]="['Dashboard']">Dashboard</a>
            <a [routerLink]="['Heroes']">Heroes</a>
            <a [routerLink]="['Users']">Users</a>
            <a [routerLink]="['Map']">Map</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES, HeroesComponent],
    providers: [
        ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        HeroService,
        UserService
    ]
})

@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    },
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    },
    {
        path: '/users',
        name: 'Users',
        component: UsersComponent
    },
    {
        path: '/map',
        name: 'Map',
        component: MapComponent
    }
])

export class AppComponent {
    title = 'Tour of Heroes';
}