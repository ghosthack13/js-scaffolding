/**//**************************************************************************
 *
 *	@author <author> <author@example.com>
 *	@file server.js
 *
 *	This is the main entry point
 *
 ******************************************************************************/

"use strict";

const path = require("path");

//!Create Server Resources
const http = require("http");

const express = require("express");
const app = express();

//! Set ports to listen on (unprivileged ports >= 1024)
const HTTP_PORT = process.env.NODE_HTTP_PORT || 3000;

if (process.env.NODE_ENV !== "production"){

	const webpack = require("webpack");

	const webpackDevMiddleware = require("webpack-dev-middleware");
	const webpackHotMiddleware = require("webpack-hot-middleware");

	const webpackConfig = require("./webpack.dev.js");
	const compiler = webpack(webpackConfig);

	// Tell express to use the webpack-dev-middleware and use the webpack.dev.js
	// configuration file as a base.
	app.use(webpackDevMiddleware(compiler, {
		index: false, // Do not respond to request to the root URL (Express will handle it)
		publicPath: webpackConfig.output.publicPath,
		writeToDisk: true,
	}));

	app.use(webpackHotMiddleware(compiler));
}

//! ------------------- Import Routing Handlers/EndPoints -------------------
app.use(express.static(path.join(__dirname, "dist"), {index: false}));

//! Load HTTP Server
let httpServer = http.createServer(app);
httpServer.listen(HTTP_PORT, function(){
	console.log("Server Activated");
	console.log(`Listening on port ${HTTP_PORT}!`);
});
