const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	
	mode: 'production',
	
	output: {
		filename: '[name].[contenthash].js',
		chunkFilename: '[name].[contenthash].js',
	},
	
	optimization: {
		moduleIds: 'hashed',
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
					name: 'vendors',
					chunks: 'all',
				},
			},
		},
	},
	
});
