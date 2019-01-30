var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
	node: {
	   fs: 'empty',
	   tls: 'empty',
	   net: 'empty'
	},
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, '/build'),
    publicPath: '/',
    filename: 'app.js',
    sourceMapFilename: '[name].map'
  },
  resolveLoader: {
    modules: ['node_modules'],
  },
	plugins: [
		new webpack.DefinePlugin({
	  	'process.env': JSON.stringify(process.env)
		}),
		new CopyWebpackPlugin([
			{ from: 'index.html', to: 'index.html' },
		]),
	],
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]?[hash]'
        }
      }
    ],
  },
};

config.mode = process.env.NODE_ENV;

module.exports = config;