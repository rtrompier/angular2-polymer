System.register(['angular2/core', 'angular2/http', '../../node_modules/rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            UserService = (function () {
                function UserService(http) {
                    this.http = http;
                }
                UserService.prototype.getUsers = function () {
                    var _self = this;
                    var headers = new http_1.Headers();
                    headers.append('Accept', 'application/json');
                    headers.append('Content-Type', 'application/json');
                    //Dont forget to add RxJS
                    //https://angular.io/docs/ts/latest/guide/server-communication.html#!#rxjs
                    return new Promise(function (resolve, reject) {
                        _self.http.get('https://glowing-inferno-6163.firebaseio.com/users.json', {
                            headers: headers
                        })
                            .map(function (res) { return res.json(); })
                            .subscribe(function (resp) {
                            var users = Object.keys(resp).map(function (id) { return resp[id]; });
                            resolve(users);
                        });
                    });
                };
                UserService.prototype.getData = function () {
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=user.service.js.map