process.env.NODE_ENV = 'test';

let expect = require('chai').expect;

function evaluate (results) {
    results.forEach((result) => expect(result.isExactSameImage, 'image is not the same').to.be.true);
}

describe('main page', function () {
    beforeEach(function () {
        browser.url('http://localhost:3000/record');
    });

    it('should look good', function () {
        let report = browser.checkElement('body');

        evaluate(report);
    });
});
