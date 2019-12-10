/*
Filename: server.js
Author: Michael Hathaway
Description: server implementation using express.js for Oregon State CS 290 Final Project
*/

const express = require('express');
const path = require('path');
const fs = require('fs');
const hbs = require('handlebars');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;


//use handlebars as templating engine
app.engine('handlebars', exphbs({
	defaultLayout: 'main',
	partialsDir  : [
        //  path to your partials
        path.join(__dirname, 'views/partials'),
    ]
}));
app.set('view engine', 'handlebars');

//use JSON Parser
app.use(bodyParser.json());

//use the public directory
app.use(express.static('pages'));

//load data from JSON File
var Data = require("./Data.json");
console.log(Data);
//keep list of class names
var ClassList = Data.map(function(a){return a.ClassName});
console.log(ClassList);

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
		ClassList : Data
	});
})

//post request to add a new class from the homepage
app.post('/addClass', function(req, res, next){
	var className = req.body.class; //get name of the class

	if(ClassList.indexOf(className) != -1){ //if class already exists, dont create new class
		res.status(400).send('Class already exists, new class not created.');
		next();
	}
	else if(className){ //
		//Add new class to ClassList
		ClassList.push(className);
		//Create new note section in Data.NoteData
		Data.push({
			"ClassName" : className,
			"Notes" : []
		});

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
	if(ClassList.indexOf(className) != 1){ //className identifies a pre existing class
		//remove class name from ClassList
		var loc = ClassList.indexOf(className);
		ClassList.splice(loc,1);
		Data.splice(loc,1);

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
	if(ClassList.indexOf(className) != -1){ //class is valid

		var itemIndex = ClassList.indexOf(className); //get index of item in ClassList
		var obj = Data[itemIndex]; //store the actual object

		res.status(200).render('ClassPageTemplate', {
			//will need to link data in ClassPageTemplate to Data.NoteData[className].Notes
			ClassName : obj.ClassName,
			NoteList : obj.Notes
		});
	}
	else{
		res.status(404).render('404');
	}
})

//post request to add a new note to a class
app.post('/addNote', function(req, res, next){
	var className = req.body.class; //get name of the class
	var noteName = req.body.title; //get note

	if(className && noteName){ //if class name and note name is provided
			//update class liste
			ClassList.push(className);
			var itemIndex = ClassList.indexOf(className);

			//update Data
			Data[itemIndex].Notes.push({
					"title" : noteName,
					"classname" : className,
					"created" : new Date().toJSON().slice(0,10).split('-').reverse().join('/'),
					"content" : ""
			})

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
})

//post request to delete a new note to a class
app.post('/deleteNote', function(req, res, next){
	var className = req.body.class; //get name of the class
	var noteName = req.body.title; //get note

	if(className && noteName){ //if class name and note name is provided
		//update class liste
		var classLoc = ClassList.indexOf(className);
		for(var i = 0; i < Data[classLoc].Notes.length; i++){
			if(Data[classLoc].Notes[i].title == noteName){
				Data[classLoc].Notes.splice(i, 1);
			}
		}

		//update "Server"
		fs.writeFile(
			__dirname + '/Data.json',
			JSON.stringify(Data),
			function (err) {
	       if (!err) {
					 console.log(err);
	         res.status(200).send();
	       } else {
					 console.log(err);
	         res.status(500).send("Failed to write data on server side.");
        }
	    }
		);
	}
	else{
		res.status(400).send('Trying to Delete file that does not exist. Delete did not occur');
	}
})


//Requests for a particular Note page
app.get('/:class/:note', function(req, res, next){
	var className = req.params.class; //get name of class page requested
	var noteName = req.params.note; //get name of note requested

	if(ClassList.indexOf(className) != -1){ //class is valid
		var classIndex = ClassList.indexOf(className);
		var classNotes = Data[classIndex].Notes; //get the notes for that class
		for(var i = 0; i < classNotes.length; i++){ //iterate through the notes for the class
			if(classNotes[i].title === noteName){ //check if note names match
				res.status(200).render('NotePageTemplate', classNotes[i]);
				return
			}
		}
		next();
	}
	else{
		res.status(404).render('404');
	}
})

//post request to update a pre existing Note
app.post('/editNote', function(req, res, next){
	var className = req.body.class; //get name of class page requested
	var noteName = req.body.note; //get name of note requested
	var newContent = req.body.content;

	if(newContent){
		if(ClassList.indexOf(className) != -1){ //check for invalid class
			classLOC = ClassList.indexOf(className);

			for(var i = 0; i < Data[classLOC].Notes.length; i++){
				if(Data[classLOC].Notes[i].title == noteName){
					Data[classLOC].Notes[i].content = newContent;
				}
			}

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
	else {
		console.log('New Note Content not provided.')
		next();
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
