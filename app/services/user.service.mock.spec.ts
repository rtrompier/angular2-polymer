import {describe, it, expect, beforeEachProviders, injectAsync} from 'angular2/testing';
import {UserService} from "./user.service";
import {provide} from "angular2/core";
import {HTTP_PROVIDERS, XHRBackend, Response, ResponseOptions} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';


describe('UserService', () => {
    beforeEachProviders(() => {
        return [
            HTTP_PROVIDERS,
            provide(XHRBackend, {useClass: MockBackend}),
            UserService
        ];
    });

    it('should respect your expectation',
        injectAsync([XHRBackend, UserService], (mockBackend, userService) => {

            let response = [{id:0, name: 'toto'}];
            let responseOptions = new ResponseOptions({body: response});
            mockBackend.connections.subscribe(
                c => c.mockRespond(new Response(responseOptions))
            );

            return userService.getUsers().then(data => {
                expect(data.length).toBe(1);
            });
        }));
});