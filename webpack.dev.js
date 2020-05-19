const path = require('path');

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

// hot middleware must be included in each entry array
var hotMiddlewareScript = "webpack-hot-middleware/client?reload=true";


module.exports = merge(common, {
	
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		host: '0.0.0.0',
		port: 8080,
		contentBase: path.join(__dirname, "dist"),
	},
	
	entry: {
		"app": [hotMiddlewareScript],
	},
});
