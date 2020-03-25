const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');

module.exports = merge(require('./webpack.common.alias.js'), {
  'mode': 'none',
  'target': 'node',
  'externals': [nodeExternals()],
  'entry': './sources/server.js',
  'node': {
    // Need this when working with express, otherwise the build fails
    '__dirname': false,   // if you don't put this is, __dirname
    '__filename': false,  // and __filename return blank or /
  },
  'output': {
    'path': path.resolve(__dirname, 'distServer/'),
    'filename': 'server.js',
    'libraryExport': 'default'
  },
  'module': {
     'rules': [
       {
         'test': /\.js$/,
         'exclude': /node_modules/,
         'use': {
           'loader': "babel-loader"
         }
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
   }
});
