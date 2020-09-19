
const add = require('./api');

function init(server) {
    server.use('/api', add);
}

module.exports ={
    init: init
}; 