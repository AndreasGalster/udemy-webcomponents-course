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
      { from: 'node_modules/@webcomponents/webcomponentsjs/bundles/webcomponents-sd-ce.js', to: 'webcomponents-sd-ce.js' },    
			{ from: 'src/assets', to: 'assets' },        
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
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [                                                                                                                          
              ["@babel/env", {targets: {esmodules: true }}]                                                                                               
            ],       
            plugins: [
              ["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: true}],
              ["@babel/plugin-proposal-class-properties"],
              ["@babel/plugin-syntax-dynamic-import"]
            ]
          },  
        }
      }
    ],


  },
};

config.mode = process.env.NODE_ENV;

module.exports = config;