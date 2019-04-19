import {
    expect
} from 'chai';

describe(`Test notification function`, function () {
    it(`should receive a notification email`, () => {
        browser.url('http://localhost:3000/record');

        const item = 'Pen';
        $(`[name="item"]`).setValue(item);
        const toWhom = 'Geza Toth';
        $(`[name="toWhom"]`).setValue(toWhom);
        const email = 'itsmegezatoth@gmail.com';
        $(`[name="email"]`).setValue(email);
        const when = '2019-01-01';
        $(`[name="when"]`).setValue(when);
        const deadline = '2019-04-18';
        $(`[name="deadline"]`).setValue(deadline);
        const comments = 'some comments...';
        $(`[name="comments"]`).setValue(comments);

        $('[type="submit"]').click();

        $('a:nth-child(2) > i').click();

        browser.alertAccept();
    });
});
