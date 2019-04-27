const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const DB_URI = 'mongodb+srv://albert-kovacs:albert-kovacs@lendingapp-hgwn0.mongodb.net/test?retryWrites=true';
// const DB_URI = 'mongodb://localhost:27017/LendingAppDB';
// const DB_URI = 'mongodb://mongo:27017/LendingAppDB'; //docker

function connect () {
    return new Promise((resolve, reject) => {
        if (process.env.NODE_ENV === 'test') {
            const Mockgoose = require('mockgoose').Mockgoose;
            const mockgoose = new Mockgoose(mongoose);

            mockgoose.prepareStorage()
                .then(() => {
                    mongoose.connect(DB_URI, {
                        useNewUrlParser: true,
                        useCreateIndex: true
                    })
                        .then((res, err) => {
                            if (err) return reject(err);
                            resolve();
                        });
                });
        } else {
            mongoose.connect(DB_URI, {
                useNewUrlParser: true,
                useCreateIndex: true
            })
                .then((res, err) => {
                    if (err) return reject(err);
                    resolve();
                });
        }
    });
}

require('./record.model');

module.exports = { connect };
