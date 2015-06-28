var webpack = require('webpack');
var path = require('path');

var appModulesPath = path.join(path.resolve('./client'), 'components');
var nodeModulesPath = path.join(__dirname, 'node_modules');

module.exports = {
  entry: {
    app: "./client/app.js",
    vendor: ["react", "react-router"]
  },
  output: {
      path: __dirname + '/client/build',
      filename: "/bundle.js"
  },
  devtool: 'eval-source-map',
  module: {
      loaders: [
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
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
