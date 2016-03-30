System.register(['angular2/testing', "./user.service", "angular2/core", 'angular2/http', 'angular2/http/testing'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, user_service_1, core_1, http_1, testing_2;
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
            },
            function (testing_2_1) {
                testing_2 = testing_2_1;
            }],
        execute: function() {
            testing_1.describe('UserService', function () {
                testing_1.beforeEachProviders(function () {
                    return [
                        http_1.HTTP_PROVIDERS,
                        core_1.provide(http_1.XHRBackend, { useClass: testing_2.MockBackend }),
                        user_service_1.UserService
                    ];
                });
                testing_1.it('should respect your expectation', testing_1.injectAsync([http_1.XHRBackend, user_service_1.UserService], function (mockBackend, userService) {
                    var response = [{ id: 0, name: 'toto' }];
                    var responseOptions = new http_1.ResponseOptions({ body: response });
                    mockBackend.connections.subscribe(function (c) { return c.mockRespond(new http_1.Response(responseOptions)); });
                    return userService.getUsers().then(function (data) {
                        testing_1.expect(data.length).toBe(1);
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=user.service.mock.spec.js.map