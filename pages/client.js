var noteCategories = document.getElementsByClassName("dropdown");
for (var i = 0; i < noteCategories.length; i++) {
	noteCategories[i].addEventListener('click', handleNoteContainerHeaderClick)
}

function handleNoteContainerHeaderClick(event){
	var actionButton = event.currentTarget;
	var clickedElem = event.target;
	var classContainer = clickedElem.parentNode.parentNode.parentNode;
	var parentChildren = classContainer.children;

	var noteContainerContent = [];
	for(var i=0;i<parentChildren.length;i++){
		if(parentChildren[i].className == "Note-Container" || parentChildren[i].className == "new-note-button"){
			noteContainerContent.push(parentChildren[i]);
		}
	}
	if(noteContainerContent.length == 2){
		if(noteContainerContent[0].style.display == "none"){
			noteContainerContent[0].style.display = "block";
			noteContainerContent[1].style.display = "block"
		}
		else{
			noteContainerContent[0].style.display = "none";
			noteContainerContent[1].style.display = "none"
		}

		//var currentStateOfChildren = noteContainerContent[0].style.display;
		//var stateToSetChildren = "none";
		//if(currentStateOfChildren == "none"){
		//	stateToSetChildren = "block";
		//}
		//noteContainerContent.style.display = stateToSetChildren;
	}
}



var newNoteButtons = document.getElementsByClassName("new-note-button");
for (var i = 0; i < newNoteButtons.length; i++) {
	newNoteButtons[i].addEventListener('click', handleNewNoteButtonClick)
}

function handleNewNoteButtonClick(event){
	var actionButton = event.currentTarget;
	var clickedElem = event.target;
	document.getElementById("new-note-modal").style.display = "block";
	var classtitle = actionButton.parentNode.getAttribute("data-classname");
	document.getElementById("new-note-modal").setAttribute("data-classname",classtitle);
}


try{
	var newNoteCloseButton = document.getElementById("new-note-close-button");
	newNoteCloseButton.addEventListener('click', handleNewNoteCloseButtonClick);
}
catch(error){
	console.log("Caught Error:", error, "Occurred becuase this page does not have  a new-note-close-button.");
}


function handleNewNoteCloseButtonClick(event){
	var actionButton = event.currentTarget;
	var clickedElem = event.target;
	document.getElementById("new-note-modal").style.display = "none";
	document.getElementById("new-note-title-input").value = "";
}


try{
	var newNoteOKButton = document.getElementById("new-note-OK-button");
	newNoteOKButton.addEventListener('click', handleNewNoteOKButtonClick);
}
catch(error){
	console.log("Caught Error:", error, "Occurred becuase this page does not have  a new-note-OK-button.");
}


function handleNewNoteOKButtonClick(event){
	var actionButton = event.currentTarget;
	var clickedElem = event.target;
	//source for date code: https://tecadmin.net/get-current-date-time-javascript/
	var today = new Date();
	var newNoteDate = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
	var newNoteTitle = document.getElementById("new-note-title-input").value.trim();
	var newNoteContent = "";
	var newNoteClass = document.getElementById("new-note-modal").getAttribute("data-classname");
	if(!newNoteTitle){
		alert("You must enter a title!");
	}
	else if(!newNoteDate){
		alert("No date has been set");
	}
	else if(!newNoteClass){
		alert("no class has been set");
	}
	else{
		var postRequest = new XMLHttpRequest();
		var requestURL = '/' + newNoteClass + '/addNote';
		postRequest.open('POST', requestURL);

		var requestBody = JSON.stringify({
			class : newNoteClass.replace(' ', '-'),
			title : newNoteTitle.replace(' ', '-')
		});
		postRequest.setRequestHeader('Content-Type', 'application/json');

		postRequest.addEventListener('load', function(event){
			if (event.target.status !== 200) {
				var responseBody = event.target.response;
				alert("Error adding note on server side: " + responseBody);
			}
			else{
				var classContainers = document.getElementsByClassName("class-container");
				var classContainer = false;
				for(var i=0;i<classContainers.length;i++){
					if(classContainers[i].getAttribute("data-classname") == document.getElementById("new-note-modal").getAttribute("data-classname")){
						classContainer = classContainers[i];
						break;
					}
				}
				if(classContainer){
					var putNewNoteHere;
					var classContainerChildren = classContainer.children;
					for(var i = 0; i < classContainerChildren.length; i++){
						if(classContainerChildren[i].className == 'Note-Container'){
							putNewNoteHere = classContainerChildren[i];
						}
					}
					var newNote = document.createElement('li');
					newNote.classList.add("Note-List-Item");
					newNote.dataset.notename = newNoteTitle;

					var noteLink = document.createElement('a');
					var link = "http://localhost:3000/" + newNoteClass.replace(' ', '-') + "/" + newNoteTitle.replace(' ', '-');
					noteLink.setAttribute('href', link);
					noteLink.textContent = newNoteTitle;

					newNote.appendChild(noteLink);
					putNewNoteHere.appendChild(newNote);

					document.getElementById("new-note-modal").style.display = "none";
					document.getElementById("new-note-title-input").value = "";
					/*
					var noteTemplate = Handlebars.templates.NoteTemplate;
					var newNoteHTML = noteTemplate({
						title: newNoteTitle,
						classname: newNoteClass,
						created: newNoteDate,
						content: newNoteContent
					});
					classContainer.insertAdjacentHTML('beforeend', newNoteHTML);
					document.getElementById("new-note-modal").style.display = "none";
					document.getElementById("new-note-title-input").value = "";
					*/
				}
				else{
					alert("This class does not exist (THIS SHOULD NOT HAPPEN!)");
				}
			}
		})
		postRequest.send(requestBody);
	}
}


try{
	var newClassButton = document.getElementById("new-class-button");
	newClassButton.addEventListener('click', handleNewClassButtonClick);
}
catch(error){
	console.log("Caught Error:", error, "Occurred becuase this page does not have  a new-class-button.");
}


function handleNewClassButtonClick(event){
	var actionButton = event.currentTarget;
	var clickedElem = event.target;
	document.getElementById("new-class-modal").style.display = "block";
}


try{
	var newClassCloseButton = document.getElementById("new-class-close-button");
	newClassCloseButton.addEventListener('click', handleNewClassCloseButtonClick);
}
catch(error){
	console.log("Caught Error:", error, "Occurred becuase this page does not have  a new-class-close-button.");
}



function handleNewClassCloseButtonClick(event){
	var actionButton = event.currentTarget;
	var clickedElem = event.target;
	document.getElementById("new-class-modal").style.display = "none";
	document.getElementById("new-class-title-input").value = "";
}


try{
	var newClassOKButton = document.getElementById("new-class-OK-button");
	newClassOKButton.addEventListener('click', handleNewClassOKButtonClick);
}
catch(error){
	console.log("Caught Error:", error, "Occurred becuase this page does not have  a new-class-OK-button.");
}

function handleNewClassOKButtonClick(event){
	var actionButton = event.currentTarget;
	var clickedElem = event.target;
	var newClassTitle = document.getElementById("new-class-title-input").value.trim();
	if(!newClassTitle){
		alert("You must enter a title!");
	}
	else{
		var postRequest = new XMLHttpRequest();
		var requestURL = '/addClass';
		postRequest.open('POST', requestURL);

		var requestBody = JSON.stringify({
			class : newClassTitle
		});

		postRequest.setRequestHeader('Content-Type', 'application/json');

		postRequest.addEventListener('load', function(event){
			if (event.target.status !== 200) {
				var responseBody = event.target.response;
				alert("Error adding class on server side: " + responseBody);
			}
			else{
				var ClassTemplate = Handlebars.templates.ClassTemplate;
				var newClassHTML = ClassTemplate({
					ClassName: newClassTitle,
					NoteList: []
				});
				document.body.insertAdjacentHTML('beforeend', newClassHTML);
			}
		})
		postRequest.send(requestBody);

		document.getElementById("new-class-modal").style.display = "none";
		document.getElementById("new-class-title-input").value = "";
	}
}


//Code to delete a Note

//add event listeners to delete-class buttons
var deleteClassButtonListeners = document.getElementsByClassName("delete-class");
for(var i = 0; i < deleteClassButtonListeners.length; i++){
	deleteClassButtonListeners[i].addEventListener('click', handleDeleteClassButtonClick);
}

// function to delete a given class from the website
function handleDeleteClassButtonClick(event){
	var actionButton = event.currentTarget;
	var clickedElem = event.target;

	var classContainer = clickedElem.parentNode;
}
