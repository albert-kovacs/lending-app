describe(`Test invalid date`, function () {
    it(`should get back "Invalid date" message from "List" page`, () => {
        browser.url('/record');

        const item = 'Book';
        $(`[name="item"]`).setValue(item);
        const toWhom = 'John Doe';
        $(`[name="toWhom"]`).setValue(toWhom);
        const email = 'john.doe@email.com';
        $(`[name="email"]`).setValue(email);
        const when = '01-01-2019';
        $(`[name="when"]`).setValue(when);
        const deadline = '03-01-2019';
        $(`[name="deadline"]`).setValue(deadline);
        const comments = 'some comments...';
        $(`[name="comments"]`).setValue(comments);

        $('[type="submit"]').click();

        const whenBack = $(`td:nth-child(4)`).getText();

        expect(whenBack).to.equal('Invalid date');
    });
});
