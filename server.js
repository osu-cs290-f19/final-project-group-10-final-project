/*
Filename: server.js
Author: Michael Hathaway
Description: server implementation using express.js for Oregon State CS 290 Final Project
*/

const express = require('express');
const path = require('path');
const fs = require('fs');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//use JSON Parser
app.use(bodyParser.json());

//use the public directory
app.use(express.static('pages'));

//load data from JSON File
var NoteData = require("./NoteData.json")

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
