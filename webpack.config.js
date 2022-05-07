const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname + '/src',
  entry: './index.js',
  module: {
    loaders: [{
      exclude: /(node_modules)/,
    }]
  },
  output: {
    path: __dirname + '/src',
    filename: 'dist'
  },
  mode: 'development',
}
