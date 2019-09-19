const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin');
module.exports = {
	entry: {
    index: './src/index.js',
    vendor: [
    'lodash'
    ]
	},
	resolve: {
    // 针对 Npm 中的第三方模块优先采用 jsnext:main 中指向的 ES6 模块化语法的文件
    mainFields: ['jsnext:main', 'browser', 'main']
  },
  plugins: [
		new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '渐进式网络应用程序'
    }),
    new MiniCssExtractPlugin(),
    // 开启 Scope Hoisting
    new ModuleConcatenationPlugin()
  ],
	module: {
    rules: [
      {
        test: /\.css$/,
        use: [
        MiniCssExtractPlugin.loader,
        'css-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use:{
        	loader: 'babel-loader',
        	options:{
        		presets: ['@babel/preset-env'] // 根据目标浏览器自动转换为相应es5代码
        	}
        }
      },
      {
      	test: /\.tsx?$/,
      	use: ['ts-loader']
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial",
          minSize: 0,
          minChunks: 1
        },
        vendor: {
        	priority: 1, // 优先级配置，优先匹配优先级更高的规则，不设置的规则优先级默认为0
          name: "vendor",
          test: /node_modules/,
          chunks: "initial",
          minSize: 0,
          minChunks: 1
        }
    	}
  	}
	}
};