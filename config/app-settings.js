const appSettings = {
    log4js: {
        traceLogConfig: {
            appenders: {
                fileAppender: { type: 'file', filename: './logs/trace.log'},
                consoleAppender: { type: 'console' }
            },
            categories: {
                default: { appenders: ['fileAppender', 'consoleAppender'], level: 'trace'}
            }
        }
    }
};

module.exports = appSettings;
