describe(`Test notification function`, function () {
    it(`should receive a notification email`, () => {
        browser.url('/record');

        const item = 'Pen';
        $(`[name="item"]`).setValue(item);
        const toWhom = 'Geza Toth';
        $(`[name="toWhom"]`).setValue(toWhom);
        const email = 'itsmegezatoth@gmail.com';
        $(`[name="email"]`).setValue(email);
        const when = '2019-01-01';
        $(`[name="when"]`).setValue(when);
        const deadline = '2019-04-25';
        $(`[name="deadline"]`).setValue(deadline);
        const comments = 'some comments...';
        $(`[name="comments"]`).setValue(comments);

        $('[type="submit"]').click();

        browser.pause(10000);

        var sender = require('../utils/email-receiver');

        browser.pause(10000);

        $(`[class="fa fa-trash fa-lg"]`).click();
        browser.alertAccept();

        sender = JSON.stringify(sender);

        expect(sender).to.contain('lending.app.notice@gmail.com');
    });
});
