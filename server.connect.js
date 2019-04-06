const db = require('./models/db');

const PORT = 3000;
const app = require('./server');

db.connect()
    .then(() => {
        app.listen(PORT, () => {
            console.log('Express server started at port : ' + PORT);
        });
    });
