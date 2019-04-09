const cron = require('node-cron');
const mongoose = require('mongoose');
const Record = mongoose.model('Record');

var apiKey = '668c19bcfe5bd125c4d256875a3abce8-6140bac2-746ca7d7';
var DOMAIN = 'sandboxa180800d11934d15879d48efe09fee29.mailgun.org';
var mailgun = require('mailgun-js')({
    apiKey: apiKey,
    domain: DOMAIN
});

var date = new Date();
var month = date.getMonth() + 1;
var day = date.getDate();
var year = date.getFullYear();
// var actualdate = year + "-" + month + "-" + day;

var actualdate = '2019-04-09';

var item;
var toWhom;
var email;
var deadline;

Record.findOne({
    deadline: actualdate
})
    .then((record) => {
        item = record.item;
        toWhom = record.toWhom;
        email = record.email;
        deadline = record.deadline;
        console.log(record);
    });

cron.schedule('*/10 * * * * *', function () {
    console.log('---------------------');
    console.log('Running Cron Job');

    var data = {
        from: 'Mailgun Sandbox <postmaster@sandboxa180800d11934d15879d48efe09fee29.mailgun.org>',
        to: email,
        subject: 'Hello ' + toWhom,
        text: 'It\'s ' + deadline + '. Please give me back my ' + item
    };

    mailgun.messages().send(data, function (error, body) {
        if (error) {
            throw (error);
        }
        console.log(body);
    });
});
