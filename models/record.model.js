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
        type: Date
    },
    deadline: {
        type: Date
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
