const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
//plugins: [
//  new UglifyJsPlugin(),
//  new webpack.optimize.OccurrenceOrderPlugin(),
//],
	optimization: {
		minimizer: [
			new UglifyJsPlugin(),
			new webpack.optimize.OccurrenceOrderPlugin(),
      new OptimizeCSSAssetsPlugin({}),
    ]
	},
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: ''
  }
});