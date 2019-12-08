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
var Data = require("./Data.json");

//logger function
function logger(req, res, next){
	console.log('++ Got a Request ++');
	console.log('  -- URL:', req.url);
	console.log('  -- Mehtod:', req.method);

	next();
}
//add logger to app
app.use(logger);


/* Request Handling Functions */

//request for homepage - should render page will all course listed + Notes in drop down menus
app.get('/', function(req, res, next){
	res.status(200).render('HomePage', {

	});
})

//Requests for a particular class pages
app.get('/:class', function(req, res, next){
	var className = req.params.class; //get name of class page requested
	if(Data.ClassList.indexOf(className) != -1){ //class is valid
		res.status(200).render('ClassPageTemplate', {
			//will need to link data in ClassPageTemplate to Data.NoteData[className].Notes
			ClassName : className,
			NoteList : Data.NoteData[className].Notes
		});
	}
	else{
		res.status(404).render('404');
	}
})

//Requests for a particular Note page
app.get('/:class/:note', function(req, res, next){
	var className = req.params.class; //get name of class page requested
	var noteName = req.params.note; //get name of note requested
	console.log(className, " : ", noteName);

	if(Data.ClassList.indexOf(className) != -1){ //class is valid
		var classNotes = Data.NoteData[className].Notes; //get the notes for that class
		for(var i = 0; i < classNotes.length; i++){ //iterate through the notes for the class
			if(classNotes[i].title === noteName){ //check if note names match
				res.status(200).render('NotePageTemplate', classNotes[i]);
			}
			else if(i === classNotes.length-1){ //if note found in notes list send 404
				res.status(404).render('404');
			}
		}
	}
	else{
		res.status(404).render('404');
	}
})

//404 errors
app.get('*', function(req, res, next){
	res.status(404).render('404');
})



//Set server to listen at port specified by the port variable(currently 3000)
app.listen(port, function(){
	console.log('The server is listening at port', port);
});
