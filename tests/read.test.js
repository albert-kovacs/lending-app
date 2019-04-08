// process.env.NODE_ENV = 'test';

// const assert = require('assert');

// const mongoose = require('mongoose');
// const Record = mongoose.model('Record');

// beforeEach((done) => {
//     let record = new Record({
//         item: 'a book',
//         toWhom: 'John Doe',
//         email: 'john.doe@email.com',
//         when: '01-01-2019',
//         deadline: '01-01-2019',
//         comments: 'some comments...'
//     });
//     record.save()
//         .then(() => done());
// });

// describe('testing read functions', () => {
//     it('reads a record from database', (done) => {
//         Record.findOne({
//             item: 'a book'
//         })
//             .then((record) => {
//                 assert(record.item === 'a book');
//                 done();
//             });
//     });
// });
