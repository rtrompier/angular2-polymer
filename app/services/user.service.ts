import {Injectable} from 'angular2/core';
import { Http, Headers, Response, HTTP_PROVIDERS } from 'angular2/http';
import '../../node_modules/rxjs/add/operator/map';

@Injectable()
export class UserService {

    constructor(public http:Http){}

    getUsers(){
        var _self = this;

        var headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');


        //Dont forget to add RxJS
        //https://angular.io/docs/ts/latest/guide/server-communication.html#!#rxjs
        return new Promise(function(resolve, reject) {
            _self.http.get('https://glowing-inferno-6163.firebaseio.com/users.json', {
                headers: headers
            })
            .map((res: Response) => res.json())
            .subscribe(function (resp) {
                var users = Object.keys(resp).map(id => resp[id]);
                console.log(users);
                resolve(users);
            });
        });
    }
    
    getData() {
        
    }

}