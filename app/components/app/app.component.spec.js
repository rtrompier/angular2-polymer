System.register(['angular2/testing', 'angular2/platform/testing/browser'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, browser_1, testing_2;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
                testing_2 = testing_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            testing_1.setBaseTestProviders(browser_1.TEST_BROWSER_PLATFORM_PROVIDERS, browser_1.TEST_BROWSER_APPLICATION_PROVIDERS);
            testing_2.describe('App Component test suite', function () {
                var tcb;
                testing_2.beforeEach(testing_2.inject([testing_2.TestComponentBuilder], function (tcBuilder) {
                    tcb = tcBuilder;
                }));
            });
        }
    }
});
//# sourceMappingURL=app.component.spec.js.map