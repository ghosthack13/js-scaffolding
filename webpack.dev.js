const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

// hot middleware must be included in each entry array
const hotMiddlewareScript = "webpack-hot-middleware/client?reload=true";

let devConfig = {
	
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		host: '0.0.0.0',
		port: 8080,
		contentBase: path.join(__dirname, "dist/"),
		// publicPath: "/",
		// writeToDisk: true,
	},
	
	entry: {},  // Dynamically add entries from common
	
	output: {
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js',
	},
	
	optimization: {
		removeAvailableModules: false,
		removeEmptyChunks: false,
		splitChunks: false,
	},
	
}

//Add hotMiddlewareScript to each entry point
let entryChunks = Object.keys(common.entry);
for (const chunk of entryChunks){
	devConfig.entry[chunk] = [hotMiddlewareScript];
}

module.exports = merge(common, devConfig);
