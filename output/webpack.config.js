const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

exports.default = {
  entry: './index.js',
  mode: 'development',
  output: {
    filename: 'index.dist.js',
    path: path.resolve(__dirname, './dist/'),
  },
  devtool: 'cheap-module',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true
    })
  ],
  devServer: {
    // hot: true
  }
}
