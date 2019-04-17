const assert = require('assert');

let {
    defineSupportCode
} = require('cucumber');

defineSupportCode(function ({
    Given,
    When,
    Then
}) {
    Given('I navigate to the Landing App main page', () => {
        browser.url('http://localhost:3000/record');
    });

    When('I maximize the window size', () => {
        browser.windowHandleSize({ width: 2000, height: 1500 });
    });

    Then('I should get page title {string}', (text) => {
        const pageTitle = browser.getTitle();
        assert.strictEqual(pageTitle, text);
    });

    When('I click on the submit button', () => {
        $('[type="submit"]').click();
    });

    Then('I should get error message {string}', (text) => {
        const error = $(`[class="text-danger"]`).getText();
        assert.strictEqual(error, text);
    });

    When('I enter test values to required input fields', () => {
        const item = 'Pen';
        $(`[name="item"]`).setValue(item);
        const toWhom = 'John Doe';
        $(`[name="toWhom"]`).setValue(toWhom);
        const email = 'john.doe@email.com';
        $(`[name="email"]`).setValue(email);
        const when = '01/01/2019';
        $(`[name="when"]`).setValue(when);
        const deadline = '03/01/2019';
        $(`[name="deadline"]`).setValue(deadline);
        const comments = 'some comments...';
        $(`[name="comments"]`).setValue(comments);
    });

    When('I click on the delete button', () => {
        $('a:nth-child(2) > i').click();
        browser.alertAccept();
        browser.pause(1000)
    });

    Then('I check if item is removed', () => {
        let isExisting = browser.isExisting(`body > div > div > table > tbody:nth-child(2) > tr > td:nth-child(1)`);
        assert.equal(false, isExisting);
    });
});
