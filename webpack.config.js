"use strict";

var path = require('path');
var webpack = require('webpack');
var rules = require('./webpack.rules');
var prod = (process.env.NODE_ENV === 'production');

var config = {
  cache: true,
  entry: {
    app: [
      './src/app.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {rules},
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    contentBase: path.join(__dirname, '/'),
    compress: true,
    port: 9000
  }
};

if (prod) {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  );
}

module.exports = config;
