var path = require('path');
var webpack = require('webpack');

var appModulesPath = path.join(path.resolve('./client'), 'components');
var nodeModulesPath = path.join(__dirname, 'node_modules');

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    app: "./client/index.js",
    vendor: ["react", "react-router", 'redux', 'react-redux', 'redux-thunk', 'axois']
  },
  output: {
      path: path.join(__dirname, 'client/build'),
      filename: "/bundle.js"
  },
  module: {
      loaders: [
          {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
          {test: /\.scss$/, loader: "style!css!sass"}
      ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
  ],
  resolve: {
    root: [appModulesPath, nodeModulesPath]
  }
};
