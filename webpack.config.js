const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: path.resolve(__dirname, 'lib/frontend'),

  entry: {
    urlParams: './urlparams'
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].build.js',
    library: '[name]'
  },

  watch: process.env.NODE_ENV !== 'production',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'env',
              'es2015'
            ]
          }
        }
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}
