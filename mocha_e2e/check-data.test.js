process.env.NODE_ENV = 'test';

import {
    expect
} from 'chai';

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

        const itemBack = $(`td:nth-child(1)`).getText();
        const toWhomBack = $(`td:nth-child(2)`).getText();
        const emailBack = $(`td:nth-child(3)`).getText();
        const whenBack = $(`td:nth-child(4)`).getText();
        const deadlineBack = $(`td:nth-child(5)`).getText();
        const commentsBack = $(`td:nth-child(6)`).getText();

        expect(item).to.equal(itemBack);
        expect(toWhom).to.equal(toWhomBack);
        expect(email).to.equal(emailBack);
        expect(when).to.equal(whenBack);
        expect(deadline).to.equal(deadlineBack);
        expect(comments).to.equal(commentsBack);

        $(`[class="fa fa-trash fa-lg"]`).click();
        browser.alertAccept();
    });
});
