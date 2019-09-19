const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	
  mode: 'development',
  devtool: 'inline-source-map',
	devServer: {
	    contentBase: './dist',
	    host: "10.52.3.158",
	    hot:true
	},
	plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: '[name].bundle.js',
    //“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
    path: path.resolve(__dirname, 'dist'),
    publicPath: ''
  }
});