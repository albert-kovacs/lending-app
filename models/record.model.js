const mongoose = require('mongoose');

var recordSchema = new mongoose.Schema({
    item: {
        type: String,
        required: 'This field is required.'
    },
    toWhom: {
        type: String,
        required: 'This field is required.'
    },
    email: {
        type: String
    },
    when: {
        type: Date
    },
    deadline: {
        type: Date
    },
    comments: {
        type: String
    }
});

mongoose.model('Record', recordSchema);
