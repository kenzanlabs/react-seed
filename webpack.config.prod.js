const commonConfig = require('./webpack.config.common');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const WebpackMd5Hash = require('webpack-md5-hash');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
  bail: true,
  profile: true,

  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },

  plugins: [
    new WebpackMd5Hash(),

    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: { screw_ie8: true, keep_fnames: true }, // eslint-disable-line camelcase
      compress: { screw_ie8: true }, // eslint-disable-line camelcase
      comments: false,
      sourceMap: true
    }),

    new ExtractTextPlugin({
      filename: 'styles.[chunkhash].css',
      allChunks: true
    })
  ]
});