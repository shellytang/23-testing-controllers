'use strict';

const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/entry.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build',
  },
  plugins: [
    new HTMLPlugin({
      template: './app/index.html',
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ],
  },
};
