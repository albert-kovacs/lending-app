import { expect } from 'chai';

process.env.NODE_ENV = 'test';

describe(`Test homepage`, function () {
    it(`should get the correct page title`, () => {
        browser.url('http://localhost:3000/record');

        const title = browser.getTitle();

        expect(title).to.equal('Lending App');
    });
});
