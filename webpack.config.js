const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './dev/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
    {
      test: /\.jsx$/,
      loaders: ['react-hot-loader', 'babel-loader'],
      include: path.join(__dirname, 'dev')
    },
    {
      test: /\.sass$/,
      loaders:['style-loader', 'css-loader', 'sass-loader']
    }]
  }
};