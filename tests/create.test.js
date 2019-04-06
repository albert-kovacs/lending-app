process.env.NODE_ENV = 'test';

const assert = require('assert');

require('../models/record.model.js');
const mongoose = require('mongoose');
const Record = mongoose.model('Record');

describe('testing create function', () => {
    it('it should create a record to mongodb', (done) => {
        let record = new Record({
            item: 'a book',
            toWhom: 'John Doe',
            email: 'john.doe@email.com',
            when: '01-01-2019',
            deadline: '01-01-2019',
            comments: 'some comments...'
        });
        record.save()
            .then(() => {
                assert(!record.isNew);
                done();
            });
    });
});
