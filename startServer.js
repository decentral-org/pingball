// Enables proper source map support in Node.js
require('source-map-support/register')

var server = require('./distServer/server.js');
var port = process.env.PORT || 3000;
server.start(port);
