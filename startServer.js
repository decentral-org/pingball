// Enables proper source map support in Node.js
require('source-map-support/register')

var server = require('./distServer/server.js');
server.start();
