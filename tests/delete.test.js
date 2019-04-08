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

describe('deleting a record', () => {
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
