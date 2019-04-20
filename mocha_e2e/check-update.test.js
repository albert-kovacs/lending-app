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

        $('[class="fas fa-pencil-alt fa-lg"]').click();

        const newItem = 'Pen';
        $(`[name="item"]`).setValue(newItem);

        $('[type="submit"]').click();

        const itemBack = $(`td:nth-child(1)`).getText();
        expect(newItem).to.equal(itemBack);

        $(`[class="fa fa-trash fa-lg"]`).click();

        browser.alertAccept();
    });
});
