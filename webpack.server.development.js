const path = require('path');
const merge = require('webpack-merge');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = merge(require('./webpack.server.common.js'), {
    'mode': 'development',
    'plugins': [
        new WebpackNotifierPlugin()
    ],
    'devtool':'source-map'
});
