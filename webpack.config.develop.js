const commonConfig = require('./webpack.config.common');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(commonConfig, {

  devServer: {
    port: 8080,
    host: 'localhost',
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    inline: true,
    stats: {
      color: true
    }
  }
});