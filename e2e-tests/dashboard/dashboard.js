describe('Dashboard', function() {
    it('Should have a title', function() {
        browser.get('/');

        expect($('h1').getText()).toContain('Tour of Heroes');

        var elements = element.all(protractor.By.css('.grid-pad .col-1-4'));
        expect(elements.count()).toEqual(10);
    });
});
