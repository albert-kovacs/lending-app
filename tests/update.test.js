process.env.NODE_ENV = 'test';

const assert = require('assert');

const mongoose = require('mongoose');
const Record = mongoose.model('Record');

let record;

beforeEach((done) => {
    record = new Record({
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

describe('updating a record', () => {
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
});
