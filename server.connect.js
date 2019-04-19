const log4js = require('log4js');
const { traceLogConfig } = require('./config/app-settings').log4js;
log4js.configure(traceLogConfig);
const logger = log4js.getLogger();

const db = require('./models/db');

const PORT = process.env.PORT || 3000;
const app = require('./server');

db.connect()
    .then(() => {
        app.listen(PORT, () => {
            logger.info('Express server started at port : ' + PORT);
        });
    });
