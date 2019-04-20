process.env.NODE_ENV = 'test';
require('../server.connect');
const app = require('../server');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp).should();

describe('health check - testing server response', () => {
    it('should get 200 HTTP response', (done) => {
        chai.request(app)
            .get('/record')
            .end((err, res) => {
                if (err) console.log(err);
                res.should.have.status(200);
                done();
            });
    });
});
