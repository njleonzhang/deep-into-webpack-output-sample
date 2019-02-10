const merge = require('webpack-merge')
const umdConfig = require('./webpack.config.moduleBase').default

exports.default = merge(umdConfig, {
  output: {
    filename: 'index.cmd2.js',
    libraryTarget: 'commonjs2'
  },
})
