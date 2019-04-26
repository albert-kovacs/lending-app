describe(`Check delete`, function () {
    it(`should delete record`, () => {
        browser.url('/record');

        const item = 'Book';
        $(`[name="item"]`).setValue(item);
        const toWhom = 'John Doe';
        $(`[name="toWhom"]`).setValue(toWhom);
        const email = 'john.doe@email.com';
        $(`[name="email"]`).setValue(email);
        const when = '2019-01-01';
        $(`[name="when"]`).setValue(when);
        const deadline = '2019-03-01';
        $(`[name="deadline"]`).setValue(deadline);
        const comments = 'some comments...';
        $(`[name="comments"]`).setValue(comments);

        $('[type="submit"]').click();
        $(`[class="fa fa-trash fa-lg"]`).click();
        browser.alertAccept();
        browser.pause(100);
        let isExisting = browser.isExisting(`td:nth-child(1)`);
        expect(isExisting).to.equal(false);
    });
});
