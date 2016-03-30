System.register(['angular2/testing', "./user.service", "angular2/core", 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, user_service_1, core_1, http_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            testing_1.describe('UserService test suite', function () {
                var injector, httpService;
                beforeEach(function () {
                    injector = core_1.Injector.resolveAndCreate([
                        http_1.HTTP_PROVIDERS
                    ]);
                    httpService = injector.get(http_1.Http);
                });
                testing_1.it('should return a http response', function (done) {
                    var service = new user_service_1.UserService(httpService);
                    service.getUsers().then(function (data) {
                        testing_1.expect(data.length).toBe(2);
                        done();
                    });
                });
                testing_1.it('should call http get method', function () {
                    spyOn(httpService, 'get');
                    var service = new user_service_1.UserService(httpService);
                    service.getUsers();
                    testing_1.expect(httpService.get).toHaveBeenCalled();
                });
            });
        }
    }
});
//# sourceMappingURL=user.service.spec.js.map