const path = require('path')

exports.default = {
  entry: './const.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist/'),
    library: 'Const',
    // libraryExport: 'default'
  },
  devtool: 'cheap-module'
}
