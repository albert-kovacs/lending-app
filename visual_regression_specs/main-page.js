process.env.NODE_ENV = 'test';

let expect = require('chai').expect;

function evaluate (results) {
    results.forEach((result) => expect(result.isExactSameImage, 'image is not the same').to.be.false);
}

describe('example', function () {
    beforeEach(function () {
        browser.url('http://localhost:3000/record');
    });

    it('should look good', function () {
        const item = '################';
        $(`[name="item"]`).setValue(item);
        $('[type="submit"]').click();

        let report = browser.checkElement('body');

        evaluate(report);
    });
});
