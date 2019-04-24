describe(`Test input`, function () {
    it(`should get field is required message`, () => {
        browser.url('/record');

        $('[type="submit"]').click();

        const error = $(`[class="text-danger"]`).getText();

        expect(error).to.equal(`This field is required.`);
    });
});
