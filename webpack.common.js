const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const srcDir = path.resolve(__dirname, "src");

module.exports = {
	
	entry: {
		"app": [path.resolve(srcDir, 'index.js')],
	},
	
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
	},
	
	module: {
		rules: [
			/*{
                test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: [{ 
					loader: 'babel-loader', 
					options: { presets: ["@babel/env", "@babel/react"] } 
				}],
            },/**/
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
			template: path.resolve(srcDir, 'index.template.html')
		}),
	]
	
};
