const path = require('path');
const merge = require('webpack-merge');

module.exports = merge(require('./webpack.server.common.js'), {
    'mode': 'production',
});
