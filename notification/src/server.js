const app = require('./app');
const config = require('./config/config');
const bodyParser = require('body-parser');
const UTILS = require("./utils/common");

// Getting current module name
const __moduleName = UTILS.getLabel(module);

app.listen(config.port,(err) => {
    if(err) {

    } else {
        console.log(`${__moduleName} service running on port ${config.port}`);
    }
});