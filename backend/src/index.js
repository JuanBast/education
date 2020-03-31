// console.log("Checking environment configuration..")
// require('../config/env-validator')
// require('./server');
const app = require('./app');
require('./database');

async function main() {

    await app.listen(app.get('port'));
    console.log('##################################################');
    console.log('##               Server started!                ##');
    console.log('##'+(' PID: ' + process.pid).padEnd(46, " ") + '##');
    console.log('##'+(' Listening on port: ' + app.get('port')).padEnd(46, " ") + '##');
    console.log('##################################################');
};

main();
