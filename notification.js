const cron = require('node-cron');
const mongoose = require('mongoose');
const Record = mongoose.model('Record');
const nodemailer = require('nodemailer');
var item, toWhom, email, when, deadline, mailOptions;

var actualDate = new Date().toJSON().slice(0, 10);
// actualDate = '2019-04-10'

cron.schedule('*/10 * * * * *', function () {
    console.log('---------------------');
    console.log('Running Cron Job');

    Record.findOne({
        deadline: actualDate,
        notified: false
    })
        .then((record) => {
            item = record.item;
            toWhom = record.toWhom;
            email = record.email;
            when = record.when;
            deadline = record.deadline;

            mailOptions = {
                from: 'Lending App <lending.app.notice@gmail.com>',
                to: email,
                subject: 'Hello ' + toWhom,
                text: 'It\'s ' + deadline + '. Please give me back my ' + item + ' you borrowed on ' + when + ' ASAP!'
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
                        return console.log(error);
                    }
                    console.log('Message sent: %s', info.messageId);
                    Record.updateOne({
                        deadline: actualDate
                    }, {
                        '$set': {
                            'notified': true
                        }
                    }, function () {
                        console.log('"notified" property set to false');
                    });
                });
            });
        })
        .catch(() => {
            console.log('---------------------');
            console.log('no item to return');
        });
});
