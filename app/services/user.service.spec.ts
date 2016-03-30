import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {UserService} from "./user.service";
import {provide, Injector} from "angular2/core";
import {Http, Response, BaseRequestOptions, ResponseOptions, HTTP_PROVIDERS} from 'angular2/http';


describe('UserService test suite', () => {
    let injector,
        httpService;

    beforeEach(() => {
        injector = Injector.resolveAndCreate([
            HTTP_PROVIDERS
        ]);

        httpService = injector.get(Http);
    });


    it('should return a http response', (done) => {
        let service = new UserService(httpService);
        service.getUsers().then(data => {
            expect(data.length).toBe(2);
            done();
        })
    })

    it('should call http get method', () => {
        spyOn(httpService, 'get');
        let service = new UserService(httpService);
        service.getUsers();

        expect(httpService.get).toHaveBeenCalled();
    })
});