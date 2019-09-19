const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
//entry: {
//  app: './src/index.js',
//  print: './src/print.js'
//},
  devtool: 'inline-source-map',
	devServer: {
	    contentBase: './dist',
	    host: "10.52.3.158",
	    hot:true
	},
	module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
		new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '模块热替换'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
};