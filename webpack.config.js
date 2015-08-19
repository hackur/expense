var path = require('path');
var webpack = require('webpack');
var embedFileSize = 65536;

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './client/index.js'
  ],
  output: {
    path: path.join(__dirname, 'client/dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: [/node_modules/],
      loader: 'eslint-loader'
    }],
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/,
      include: __dirname
    }, {
      test: /\.scss$/,
      loader: "style!css!sass"
    }, {
      test: /\.css$/,
      loader: "style!css"
    },
    {test: /\.svg/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/svg+xml'},
    {test: /\.png$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/png'},
    {test: /\.jpg/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/jpeg'},
    {test: /\.gif/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/gif'},
    {
      test: /\.(otf|eot|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url?limit=' + embedFileSize
    }]
  }
};
