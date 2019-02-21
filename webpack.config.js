const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/jquery-fetch.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'jquery-fetch.min.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['eslint-loader']
    }]
  },
  plugins: [
    new UglifyJsPlugin()
  ]
}
