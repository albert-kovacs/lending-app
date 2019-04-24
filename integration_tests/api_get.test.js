process.env.NODE_ENV = 'test';
const expect = require('chai').expect;
const request = require('supertest');

describe('GET /record', () => {
    // it('Should not get any records', (done) => {
    //   request('localhost:3000').get('/list')
    //     .then((res) => {
    //       const body = res.header['location'];
    //       console.log(body);
    //     //   expect(body.length).to.equal(0);
    //       done();
    //     })
    //     .catch((err) => done(err));
    // });

    xit('OK, getting notes has 1 note', (done) => {
        request('localhost:3000').post('/record')
            .send({
                _id: '',
                item: 'book',
                toWhom: 'John Doe',
                email: 'john.doe@email.com',
                when: '2019-01-01',
                deadline: '2019-03-01',
                comments: 'some comments...'
            })
            .then(() => {
                request('localhost:3000').get('/list')
                    .then((res) => {
                        const header = res.header;
                        const body = res.body;
                        console.log(body);
                        // expect(location).to.equal('record/list');
                        done();
                    }).catch((err) => done(err));
            })
            .catch((err) => done(err));
    });
});
