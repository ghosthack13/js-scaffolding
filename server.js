/**//**************************************************************************
 *
 *	@author Jone Doe <jdoe@example.com>
 *	@file server.js
 *
 *	This is the main entry point
 *
 ******************************************************************************/

"use strict"

//!Create Server Resources
const http = require("http");

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
		writeToDisk: true,
	}));

	app.use(webpackHotMiddleware(compiler));

}

//! Set ports to listen on (unprivileged ports >= 1024)
const HTTP_PORT = 3000;


//! ------------------- Import Routing Handlers/EndPoints -------------------


//! Load HTTP Server
let httpServer = http.createServer(app);
httpServer.listen(HTTP_PORT, function(){
	console.log(`Fitness Tracker App`);
	console.log(`Listening on port ${HTTP_PORT}!`);
});
