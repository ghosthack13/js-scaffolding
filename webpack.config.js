const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// hot middleware must be included in each entry array
var hotMiddlewareScript = "webpack-hot-middleware/client?reload=true";

module.exports = {

	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		host: '0.0.0.0',
		port: 8080,
		contentBase: path.join(__dirname, "dist"),
	},
	
	entry: {
		"app": [hotMiddlewareScript, './src/index.js'],
	},
	
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
	},
	
	module: {
		rules: [
			/*
			{
                test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: [{ 
					loader: 'babel-loader', 
					options: { presets: ["@babel/env", "@babel/react"] } 
				}],
            },
			/**/
			{
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader'
                    },
                ],
            }
		]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new CleanWebpackPlugin({
			cleanStaleWebpackAssets: false
		}),
		new HtmlWebpackPlugin({
			title: 'Webpack Output',
			template: 'src/index.template.html'
		}),
	]
	
};