var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var embedFileSize = 65536;

// Production set-up
var app = ['./client/index.js'];
var watch = false;
var devtool = '';
var plugins = [
  new webpack.NoErrorsPlugin(),
  new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js', Infinity),
  new ExtractTextPlugin('styles.css', { allChunks: true }),
  new HtmlWebpackPlugin({
    template: path.resolve('client', 'index.html'),
    inject: 'body'
  }),
  new webpack.DefinePlugin({
    __DEVELOPMENT__: true
  })
];

if (process.env.NODE_ENV === 'development') {
  // Development set-up
  watch = true;
  devtool = 'eval-source-map';
  app = app.concat([
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server'
  ]);
  plugins.push(new webpack.HotModuleReplacementPlugin());
} else {
  plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }));
}

module.exports = {
  devtool: devtool,
  watch: watch,
  entry: {
    app: app,
    vendor: ['react', 'redux', 'react-router', 'history']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: plugins,
  resolve: {
    extensions: ['', '.js', '.html', '.css'],
    modulesDirectories: ['./client', './node_modules']
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint-loader', exclude: [/node_modules/] }
    ],
    loaders: [
      { test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/, include: __dirname },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css!cssnext') },
      { test: /\.(otf|eot|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=' + embedFileSize },
      { test: /\.svg/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/svg+xml' },
      { test: /\.png$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/png' },
      { test: /\.jpg/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/jpeg' },
      { test: /\.gif/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/gif' },
    ],
  },
  cssnext: { browsers: "last 2 versions" }
};
