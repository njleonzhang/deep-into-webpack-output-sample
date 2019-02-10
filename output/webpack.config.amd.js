const merge = require('webpack-merge')
const umdConfig = require('./webpack.config.moduleBase').default

exports.default = merge(umdConfig, {
  output: {
    filename: 'index.amd.js',
    libraryTarget: 'amd'
  },
})
