import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {UserService} from "./user.service";
import {provide, Injector} from "angular2/core";
import {MockBackend} from 'angular2/http/testing';

import {Http, Response, BaseRequestOptions, ResponseOptions, HTTP_PROVIDERS} from 'angular2/http';


describe('UserService', () => {
    beforeEachProviders(() => {
        [
            MockBackend,
            BaseRequestOptions,
            provide(
                Http,
                {
                    useFactory: (backend, defaultOptions) => {
                        return new Http(backend, defaultOptions);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                }),
            UserService
        ]
    });

    it('should respect your expectation',
        inject(
            [UserService, MockBackend], (userService, mockBackend) => {
                let response = 'Expected Response from HTTP service usually JSON format';
                let responseOptions = new ResponseOptions({body: response});
                mockBackend.connections.subscribe(
                    c => c.mockRespond(new Response(responseOptions)));

                var res = userService.getUsers();
                expect(res).toEqual('your own expectation');
            }));
});