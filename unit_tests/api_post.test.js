process.env.NODE_ENV = 'test';
const expect = require('chai').expect;
const request = require('supertest');
var mongoose = require('mongoose');
var id = mongoose.Types.ObjectId('4edd40c86762e0fb12000003');

describe('POST /record', () => {
  it('Should relocate to the correct location after inserting new record', (done) => {
    request('localhost:3000').post('/record')
      .send({
        _id: "",
        item: 'book',
        toWhom: 'John Doe',
        email: 'john.doe@email.com',
        when: '2019-01-01',
        deadline: '2019-03-01',
        comments: 'some comments...'
      })
      .then((res) => {
        const location = res.header['location'];
        expect(location).to.equal('record/list');
        done();
      })
      .catch((err) => done(err));
  });

  it('Should relocate to the correct location after updating a record', (done) => {
    request('localhost:3000').post('/record')
      .send({
        _id: id,
        item: 'book',
        toWhom: 'John Doe',
        email: 'john.doe@email.com',
        when: '2019-01-01',
        deadline: '2019-03-01',
        comments: 'some comments...'
      })
      .send({
        _id: id,
        item: 'pen',
        toWhom: 'John Doe',
        email: 'john.doe@email.com',
        when: '2019-01-01',
        deadline: '2019-03-01',
        comments: 'some comments...'
      })
      .then((res) => {
        const location = res.header['location'];
        expect(location).to.equal('record/list');
        done();
      })
      .catch((err) => done(err));
  });
});