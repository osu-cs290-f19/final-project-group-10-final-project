var noteCategories = document.getElementsByClassName("dropdown");
for (var i = 0; i < noteCategories.length; i++) {
	noteCategories[i].addEventListener('click', handleNoteContainerHeaderClick)
}

function handleNoteContainerHeaderClick(event){	
	var actionButton = event.currentTarget;
	var clickedElem = event.target;
	var classContainer = clickedElem.parentNode.parentNode;
	var parentChildren = classContainer.children;
	var noteContainerContent = false;
	var j = 0;
	for(var i=0;i<parentChildren.length;i++){
		if(parentChildren[i].className == "Note-Container" || parentChildren[i].className == "new-note-button"){
			noteContainerContent[j] = parentChildren[i];
			j++;
		}
	}
	if(noteContainerContent){
		var currentStateOfChildren = noteContainerContent[0].style.display;
		var stateToSetChildren = "none";
		if(currentStateOfChildren == "none"){
			stateToSetChildren = "block";
		}
		noteContainerContent.style.display = stateToSetChildren;
	};
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



var newNoteCloseButton = document.getElementById("new-note-close-button");
newNoteCloseButton.addEventListener('click', handleNewNoteCloseButtonClick);

function handleNewNoteCloseButtonClick(event){	
	var actionButton = event.currentTarget;
	var clickedElem = event.target;
	document.getElementById("new-note-modal").style.display = "none";
	document.getElementById("new-note-title-input").value = "";
}



var newNoteOKButton = document.getElementById("new-note-OK-button");
newNoteOKButton.addEventListener('click', handleNewNoteOKButtonClick);

function handleNewNoteOKButtonClick(event){	
	var actionButton = event.currentTarget;
	var clickedElem = event.target;
	//source for date code: https://tecadmin.net/get-current-date-time-javascript/
	var today = new Date();
	var newNoteDate = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
	var newNoteTitle = document.getElementById("new-note-title-input").value.trim();
	var newNoteContent = "";
	var newNoteClass = clickedElem.parentNode.parentNode.getAttribute("data-classname");
	if(!newNoteTitle){
		alert("You must enter a title!");
	}
	else if(!newNoteDate || !newNoteContent || !newNoteClass){
		alert("An error has occured (THIS SHOULD NOT HAPPEN!)");
	}
	else{
		var postRequest = new XMLHttpRequest();
		var requestURL = '/' + "<ClassName Variable>" + '/addNote';
		postRequest.open('POST', requestURL);

		var requestBody = JSON.stringify({
			class : <ClassName Variable>,
			title : <NoteTitle Variable>
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
				}
				else{
					alert("This class does not exist (THIS SHOULD NOT HAPPEN!)");
				}
			}
		})
		postRequest.send(requestBody);
	}
}



var newClassButton = document.getElementById("new-class-button");
newClassButton.addEventListener('click', handleNewClassButtonClick);

function handleNewClassButtonClick(event){	
	var actionButton = event.currentTarget;
	var clickedElem = event.target;
	document.getElementById("new-class-modal").style.display = "block";
}



var newClassCloseButton = document.getElementById("new-class-close-button");
newClassCloseButton.addEventListener('click', handleNewClassCloseButtonClick);

function handleNewClassCloseButtonClick(event){	
	var actionButton = event.currentTarget;
	var clickedElem = event.target;
	document.getElementById("new-class-modal").style.display = "none";
	document.getElementById("new-class-title-input").value = "";
}



var newClassOKButton = document.getElementById("new-Class-OK-button");
newClassOKButton.addEventListener('click', handleNewClassOKButtonClick);

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
			class : <ClassName Variable>
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
					ClassName: newClassClass,
					NoteList: []
				});
				document.body.insertAdjacentHTML('beforeend', newClassHTML);
			}
		})
		postRequest.send(requestBody);		
		
		document.getElementById("new-Class-modal").style.display = "none";
		document.getElementById("new-Class-title-input").value = "";
	}
}
