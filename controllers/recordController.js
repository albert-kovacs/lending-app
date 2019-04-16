const log4js = require('log4js');
const { traceLogConfig } = require('../config/app-settings').log4js;
log4js.configure(traceLogConfig);
const logger = log4js.getLogger();

const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Record = mongoose.model('Record');

router.get('/', (req, res) => {
    res.render('pages/add', {
        viewTitle: 'ADD NEW ITEM'
    });
});

router.post('/', (req, res) => {
    if (req.body._id === '') {
        insertRecords(req, res);
    } else {
        updateRecord(req, res);
    }
});

function insertRecords (req, res) {
    var record = new Record();
    record.item = req.body.item;
    record.toWhom = req.body.toWhom;
    record.email = req.body.email;
    record.when = req.body.when;
    record.deadline = req.body.deadline;
    record.comments = req.body.comments;
    record.save((err, doc) => {
        if (!err) {
            res.redirect('record/list');
            logger.info('Record inserted.');
        } else {
            if (err.name === 'ValidationError') {
                handleValidationError(err, req.body);
                res.render('pages/add', {
                    viewTitle: 'Add',
                    record: req.body
                });
            }
            logger.error('Error during record insertion : ' + err);
        }
    });
}

function updateRecord (req, res) {
    Record.findOneAndUpdate({
        _id: req.body._id
    }, req.body, {
        new: true
    }, (err, doc) => {
        if (!err) {
            res.redirect('record/list');
            logger.info('Record updated.');
        } else {
            handleValidationError(err, req.body);
            res.render('pages/add', {
                viewTitle: 'Add',
                record: req.body
            });
            logger.error('Error during record update : ' + err);
        }
    });
}

router.get('/list', (req, res) => {
    Record.find((err, docs) => {
        if (!err) {
            res.render('pages/list', {
                list: docs
            });
            logger.info('Records list retrieved.');
        } else {
            logger.error('Error in retrieving records list :' + err);
        }
    });
});

router.get('/:id', (req, res) => {
    Record.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render('pages/add', {
                viewTitle: 'Update Item',
                record: doc
            });
            logger.info('Record retrieved.');
        }
    });
});

router.get('/delete/:id', (req, res) => {
    Record.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/record/list');
            logger.info('Record deleted.');
        } else {
            logger.error('Error in deleting record :' + err);
        }
    });
});

function handleValidationError (err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
        case 'item':
            body['itemError'] = err.errors[field].message;
            break;
        case 'toWhom':
            body['toWhomError'] = err.errors[field].message;
            break;
        case 'email':
            body['emailError'] = err.errors[field].message;
            break;
        case 'when':
            body['whenError'] = err.errors[field].message;
            break;
        case 'deadline':
            body['deadlineError'] = err.errors[field].message;
            break;
        default:
            break;
        }
    }
}

module.exports = router;
