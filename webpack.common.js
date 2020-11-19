const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const srcDir = path.resolve(__dirname, "src", "pages");
const distDir = path.resolve(__dirname, "dist");

module.exports = {

	entry: {
		"index": [path.resolve(srcDir, "index.jsx")],
	},

	output: {
		filename: "[name].bundle.js",
		path: distDir,
		publicPath: "/",
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					{ loader: "babel-loader" }
				],
			},
			{
				test: /\.css$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" }
				],
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{ loader: "file-loader"	},
				],
			}
		]
	},

	plugins: [
		new CleanWebpackPlugin({
			cleanStaleWebpackAssets: false
		}),
		new HtmlWebpackPlugin({
			title: "Home",
			template: path.resolve(srcDir, "default.template.html"),
			chunks: ["index"],
			filename: "index.html"
		}),
	]

};
