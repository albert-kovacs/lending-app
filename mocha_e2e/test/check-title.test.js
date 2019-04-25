describe(`Test homepage`, function () {
    it(`should get the correct page title`, () => {
        browser.url('/record');

        const title = browser.getTitle();

        expect(title).to.equal('Lending App');
    });
});
