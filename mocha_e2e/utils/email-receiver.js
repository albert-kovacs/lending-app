var Imap = require('imap');

var imap = new Imap({
    user: 'itsmegezatoth@gmail.com',
    password: 'nttqqxdvrfzpwnvi',
    host: 'imap.gmail.com',
    port: 993,
    tls: true
});

function openInbox (cb) {
    imap.openBox('INBOX', true, cb);
}

imap.once('ready', function () {
    openInbox(function (err, box) {
        if (err) throw err;
        imap.search(['UNSEEN'], function (err, results) {
            if (err) throw err;
            var f = imap.fetch(results[0], {
                bodies: 'HEADER.FIELDS (FROM)'
            });

            f.on('message', function (msg) {
                msg.on('body', function (stream) {
                    let result = '';

                    stream.on('data', function (chunk) {
                        result += chunk;
                    });

                    stream.on('end', function () {
                        module.exports.result = result;
                    });
                });
            });

            f.once('error', function (err) {
                console.log('Fetch error: ' + err);
            });
            f.once('end', function () {
                console.log('Done fetching all messages!');
                imap.end();
            });
        });
    });
});

imap.once('error', function (err) {
    console.log(err);
});

imap.once('end', function () {
    console.log('Connection ended');
});

imap.connect();
