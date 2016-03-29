import {setBaseTestProviders} from 'angular2/testing';
import {
    TEST_BROWSER_PLATFORM_PROVIDERS,
    TEST_BROWSER_APPLICATION_PROVIDERS
} from 'angular2/platform/testing/browser';
setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS);

import {
    describe,
    it,
    expect,
    inject,
    injectAsync,
    beforeEach,
    TestComponentBuilder
} from 'angular2/testing';

import {AppComponent} from './app.component';

describe('App Component test suite', () => {
    let tcb: TestComponentBuilder;

    beforeEach(inject([TestComponentBuilder], tcBuilder => {
        tcb = tcBuilder;
    }));

})