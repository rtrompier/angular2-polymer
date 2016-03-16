import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, CanActivate, OnActivate} from 'angular2/router';


import {User} from '../../model/user';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'users',
    templateUrl: 'app/components/users/users.component.html',
})

export class UsersComponent implements OnInit {
    users:User[];

    constructor(private _userSerivce:UserService) {}

    ngOnInit() {
        this._userSerivce.getUsers().then(users => this.users = users);
    }
}

