'use strict'
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

function resolveApp (relativePath) {
  return path.resolve(relativePath)
}

module.exports = {
  entry: [
    require.resolve('webpack-dev-server/client') + '?/',
    require.resolve('webpack/hot/dev-server'),
    path.join(__dirname, 'src/main.js')
  ],
  devtool: 'eval',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'build.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: resolveApp('index.html')
    })
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.html$/,
        loader: 'html'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  }
}
