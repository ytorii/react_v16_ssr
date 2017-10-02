var path = require('path');
var webpack = require('webpack')


var assetsPath = path.join(__dirname, 'public', 'assets');
var publicPath = 'assets/';
var commonLoaders = [
  {
    test: /\.js$|\.jsx$/,
    loader: 'babel-loader',
    include: path.join(__dirname,  'app')
  },{
    test: /\.json$/,
    loader: 'json-loader'
  }
];

var PRODUCTION = process.env.NODE_ENV === 'production';
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var production_plugins = PRODUCTION ? [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new UglifyJsPlugin()
  ] : []


module.exports = [
  {
    name: 'browser',
    devtool: 'source-map',
    context: path.join(__dirname,  'app'),
    entry: {
      app: './client'
    },
    output: {
      path: assetsPath,
      filename: '[name].js',
      publicPath: publicPath
    },

    module: {
      loaders: commonLoaders
    },
    resolve: {
      extensions: [ '.js', '.jsx'],
      modules: [
        'app', 'node_modules'
      ]
    },
    plugins: production_plugins
  },{
    name: 'server-side rendering',
    context: path.join(__dirname, 'app'),
    entry: {
      app: './server'
    },
    target: 'node',
    output: {
      path: assetsPath,
      filename: '[name].server.js',
      publicPath: publicPath,
      libraryTarget: 'commonjs2'
    },
    module: {
      loaders: commonLoaders
    },
    resolve: {
      extensions: [ '.js', '.jsx'],
      modules: [
        'app', 'node_modules'
      ]
    }
  }
];
