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

//use handlebars as templating engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//use JSON Parser
app.use(bodyParser.json());

//use the public directory
app.use(express.static('pages'));

//load data from JSON File
var Data = require("./Data.json");

var noteArrayLabels = Data.NoteData["Web-Development"].Notes.map(function(a) {return a.title;});
console.log(result);

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

//post request to add a new class from the homepage
app.post('/addClass', function(req, res, next){
	var className = req.body.class; //get name of the class

	if(Data.ClassList.indexOf(className) != -1){ //if class already exists, dont create new class
		res.status(400).send('Class already exists, new class not created.');
		next();
	}
	else if(className){ //
		//Add new class to Data.ClassList
		Data.ClassList.push(className);
		//Create new note section in Data.NoteData
		Data.NoteData.className = {"Notes" : []};

		//update "Server"
		fs.writeFile(
			__dirname + '/Data.json',
			JSON.stringify(Data),
			function (err) {
        if (!err) {
          res.status(200).send();
        } else {
          res.status(500).send("Failed to write data on server side.");
        }
      }
		);
	}
	else{
		next();
	}
})

//post request to delete a class from the homepage
app.post('/deleteClass', function(req, res, next){
	var className = req.body.class; //get name of the class
	if(Data.ClassList.indexOf(className) != 1){ //className identifies a pre existing class
		//remove class name from Data.ClassList
		Data.ClassList.splice(Data.ClassList.indexOf(className), 1);
		//remove notes from Data.NoteData
		delete Data.NoteData.className;

		//update "Server"
		fs.writeFile(
			__dirname + '/Data.json',
			JSON.stringify(Data),
			function (err) {
        if (!err) {
          res.status(200).send();
        } else {
          res.status(500).send("Failed to write data on server side.");
        }
      }
		);
	}
	else{
		next();
	}
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

//post request to add a new note to a class
app.post('/:class/addNote', function(req, res, next){
	var className = req.params.class; //get name of the class
	var noteName = req.body.title; //get note

	if(Data.ClassList.indexOf(className) != 1){ //className identifies a pre existing class

	}
	else{
		next();
	}
})

//post request to delete a new note to a class
app.post('/:class/deleteNote', function(req, res, next){
	var className = req.params.class; //get name of the class
	var noteName = req.body.title; //get note

	if(Data.ClassList.indexOf(className) != 1){ //className identifies a pre existing class
		if(Data.NoteData[className].Notes.indexOf(noteName) != -1){ //noteName identifies an existing note
			var noteArrayLabels = Data.NoteData["Web-Development"].Notes.map(function(a) {return a.title;});
			var indexToRemove = noteArrayLabels.indexOf(noteName);

			Data.NoteData.splice(indexToRemove, 1);

			//update "Server"
			fs.writeFile(
				__dirname + '/Data.json',
				JSON.stringify(Data),
				function (err) {
	        if (!err) {
	          res.status(200).send();
	        } else {
	          res.status(500).send("Failed to write data on server side.");
	        }
	      }
			);
		}
		else{
			res.status(400).send('Request is for a note that does not exist. Delete did not occur');
		}
	}
	else{
		next();
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

//post request to update a pre existing Note
app.post(':class/:note/editNote', function(req, res, next){

})

//404 errors
app.get('*', function(req, res, next){
	res.status(404).render('404');
})



//Set server to listen at port specified by the port variable(currently 3000)
app.listen(port, function(){
	console.log('The server is listening at port', port);
});
