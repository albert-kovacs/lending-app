const express = require('express');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const path = require('path');
const moment = require('moment');

const recordController = require('./controllers/recordController');

var app = express();

app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(bodyparser.json());

app.set('views', path.join(__dirname, '/views/'));

app.engine('hbs', exphbs({
    extname: 'hbs',
    defaultLayout: 'mainLayout',
    layoutsDir: path.join(__dirname, '/views/layouts/'),
    helpers: {
        formatDate: function (date, format) {
            return moment(date).format('MM/DD/YYYY');
        }
    }
}));

app.set('view engine', 'hbs');

app.use('/record', recordController);

module.exports = app;
