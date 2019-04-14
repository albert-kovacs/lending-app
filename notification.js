const log4js = require('log4js');
const { traceLogConfig } = require('./config/app-settings').log4js;
log4js.configure(traceLogConfig);
const logger = log4js.getLogger();

const cron = require('node-cron');
const mongoose = require('mongoose');
const Record = mongoose.model('Record');
const nodemailer = require('nodemailer');
var item, toWhom, email, when, mailOptions;

var actualDate = new Date().toJSON().slice(0, 10);
// actualDate = '2019-04-10'

cron.schedule('*/100 * * * * *', function () {
    console.log('---------------------');
    logger.info('Running Cron Job');

    Record.findOne({
        deadline: actualDate,
        notified: false
    })
        .then((record) => {
            item = record.item;
            toWhom = record.toWhom;
            email = record.email;
            when = record.when;

            mailOptions = {
                from: 'Lending App <lending.app.notice@gmail.com>',
                to: email,
                subject: 'Hello ' + toWhom,
                text: 'Please give me back my ' + item + ' you borrowed on ' + when + '.'
            };

            nodemailer.createTestAccount((account) => {
                let transporter = nodemailer.createTransport({
                    host: 'smtp.googlemail.com',
                    port: 465,
                    secure: true,
                    auth: {
                        user: 'lending.app.notice@gmail.com',
                        pass: 'xdciypgenulukfhu'
                    }
                });

                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        logger.error(error);
                    }
                    logger.info('Message sent: %s', info.messageId);
                    Record.updateOne({
                        deadline: actualDate
                    }, {
                        '$set': {
                            'notified': true
                        }
                    }, function () {
                        logger.info('"notified" property set to false');
                    });
                });
            });
        })
        .catch(() => {
            console.log('---------------------');
            logger.info('no item to return');
        });
});
