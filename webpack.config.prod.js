const commonConfig = require('./webpack.config.common');
const webpackMerge = require('webpack-merge');
const WebpackMd5Hash = require('webpack-md5-hash');
const webpack = require('webpack');

module.exports = webpackMerge(commonConfig, {
  output: {
    chunkFilename: '[chunkhash].[id].chunk.js'
  },
  bail: true,
  profile: true,
  plugins: [
    new WebpackMd5Hash(),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: { screw_ie8: true, keep_fnames: true }, // eslint-disable-line camelcase
      compress: { screw_ie8: true }, // eslint-disable-line camelcase
      comments: false,
      sourceMap: true
    })
  ]
});