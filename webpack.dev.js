const path = require("path");

const webpack = require("webpack");
const { merge } = require("webpack-merge");
// const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const common = require("./webpack.common.js");

let devConfig = {

	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		host: "0.0.0.0",
		port: 8080,
		contentBase: path.join(__dirname, "dist/"),
		publicPath: "/",
		// writeToDisk: true,
		hot: true,
	},

	entry: {},  // Dynamically add entries from common

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		// new ReactRefreshWebpackPlugin()
	]

};

//Add hotMiddlewareScript to each entry point (Required for Hot Reloading)
let entryChunks = Object.keys(common.entry);
for (const chunk of entryChunks){
	const hotMiddlewareScript = "webpack-hot-middleware/client?reload=true";
	devConfig.entry[chunk] = [hotMiddlewareScript];
}

module.exports = merge(common, devConfig);