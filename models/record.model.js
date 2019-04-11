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
        type: String,
        required: 'This field is required.'
    },
    when: {
        type: String
    },
    deadline: {
        type: String
    },
    comments: {
        type: String
    },
    notified: {
        type: Boolean,
        default: false
    }
});

mongoose.model('Record', recordSchema);
