
const express = require('express');
const app = express();

if (process.env.NODE_ENV !== "production"){
	
	var webpack = require('webpack');
	var webpackDevMiddleware = require('webpack-dev-middleware');
	var webpackHotMiddleware = require('webpack-hot-middleware');
	
	var webpackConfig = require('./webpack.dev.js');
	var compiler = webpack(webpackConfig);
	
	// Tell express to use the webpack-dev-middleware and use the webpack.dev.js
	// configuration file as a base.
	app.use(webpackDevMiddleware(compiler, {
		publicPath: webpackConfig.output.publicPath,
	}));
	
	app.use(webpackHotMiddleware(compiler));

}

// Serve the files on port 3000.
app.listen(3000, function () {
	console.log('Example app listening on port 3000!\n');
});