const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); //須安裝uglifyjs-webpack-plugin和uglify-js

module.exports = {
	mode: "development",
	entry: './src/index.js',
	module: {
	  rules:[
		{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
	  ]
	},
	resolve:{
		alias: { 'react-dom': '@hot-loader/react-dom'  }
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist'
  	},
	plugins:[
		new UglifyJSPlugin()
	]
};