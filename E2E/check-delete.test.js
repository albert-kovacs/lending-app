describe(`Test data`, function () {
    it(`should get back correct data from "List" page`, () => {
        browser.url('http://localhost:3000/record');

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

        $('a:nth-child(2) > i').click();

        browser.alertAccept();
    });
});
