const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader']
        })
        // use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [new ExtractTextPlugin('styles.css')]
}
