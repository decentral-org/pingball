const merge = require('webpack-merge');

const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = merge(require('./webpack.common.js'), {
    'mode': 'production',
    'plugins': [
        new WebpackNotifierPlugin()
    ]
});
