const path = require('path');
const merge = require('webpack-merge');

module.exports =  merge(require('./webpack.common.alias.js'), {
    'entry': './sources/client.js',
    'mode': 'none',
    'module': {
        'rules': [
            {
                'test': /\.js$/,
                'use': [

                    {
                        'loader': 'babel-loader',
                        'options': {

                            'presets': [

                                '@babel/preset-env'
                            ]
                        }
                    }
                ]
            },
            {
                'test': /\.mp3|\.png$/,
                'use': [

                    {
                        'loader': 'url-loader'
                    }
                ]
            }
        ]
    },
    'output': {
        'path': path.resolve(__dirname, 'dist/'),
        'filename': 'index.js'
    }
});
