process.env.NODE_ENV = 'test';
const assert = require('assert');
require('../server.connect');
require('../models/record.model.js');
const mongoose = require('mongoose');
const Record = mongoose.model('Record');

beforeEach((done) => {
    let record = new Record({
        item: 'a book',
        toWhom: 'John Doe',
        email: 'john.doe@email.com',
        when: '01-01-2019',
        deadline: '01-01-2019',
        comments: 'some comments...'
    });
    record.save()
        .then(() => done());
});

describe('Testing mongodb functions', () => {
    it('it should create a record to mongodb', (done) => {
        let record = new Record({
            item: 'a book',
            toWhom: 'John Doe',
            email: 'john.doe@email.com',
            when: '2019-01-01',
            deadline: '2019-03-01',
            comments: 'some comments...'
        });
        record.save()
            .then(() => {
                assert(!record.isNew);
                done();
            });
    });
    it('updates a record using its instance', (done) => {
        Record.updateOne({ item: 'another book' })
            .then(() => Record.findOne({
                item: 'another book'
            }))
            .then((record) => {
                assert(record.item === 'another book');
                done();
            }).catch(done);
    });
    it('reads a record from database', (done) => {
        Record.findOne({
            item: 'a book'
        })
            .then((record) => {
                assert(record.item === 'a book');
                done();
            });
    });
    it('removes a record using its instance', (done) => {
        Record.deleteMany()
            .then(() => Record.findOne({
                item: 'a book'
            }))
            .then((record) => {
                assert(record === null);
                done();
            }).catch(done);
    });
});
