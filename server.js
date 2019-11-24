/*
Filename: server.js
Author: Michael Hathaway
Description: server implementation using express.js for Oregon State CS 290 Final Project
*/

const express = require('express');
const app = express();
const port = 3000;

//use object to cache pages, so don't have to read from disk for every request
var serverCache = {};

//logger function
function logger(req, res, next){
	console.log('++ Got a Request ++');
	console.log('  -- URL:', req.url);
	console.log('  -- Mehtod:', req.method)

	next();
}

//add logger to app 
app.use(logger);

//Set server to listen at port specified by the port variable(currently 3000)
app.listen(port, function(){
	console.log('The server is listening at port', port);
});

//Handle get request for '/'
app.get('/', function(req, res, next){
	res.status(200).sendFile(__dirname + '/pages/index.html');
});


app.use(express.static('pages'));

//handle requests for pages that do not exist
app.get('*', function(req, res, next){
	res.status(404).sendFile(__dirname + '/pages/404.html');
});