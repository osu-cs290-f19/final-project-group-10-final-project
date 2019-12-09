//client side post request for /addClass
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
  } else {
    //client side code to insert new note
  }
})
postRequest.send(requestBody);



///////////////////////



//client side post request for /deleteClass
var postRequest = new XMLHttpRequest();
var requestURL = '/deleteClass';
postRequest.open('POST', requestURL);

var requestBody = JSON.stringify({
  class : <ClassName Variable>
});

postRequest.setRequestHeader('Content-Type', 'application/json');

postRequest.addEventListener('load', function(event){
  if (event.target.status !== 200) {
    var responseBody = event.target.response;
    alert("Error deleting class on server side: " + responseBody);
  } else {
    //client side code to delete class
  }
})
postRequest.send(requestBody);


///////////////////////


//client side post request for /:class/addNote
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
  } else {
    //client side code to add new note
  }
})
postRequest.send(requestBody);



///////////////////////



//client side post request for /:class/deleteNote
var postRequest = new XMLHttpRequest();
var requestURL = '/' + "<ClassName Variable>" + '/deleteNote';
postRequest.open('POST', requestURL);

var requestBody = JSON.stringify({
  class : <ClassName Variable>,
  title : <NoteTitle Variable>
});

postRequest.setRequestHeader('Content-Type', 'application/json');

postRequest.addEventListener('load', function(event){
  if (event.target.status !== 200) {
    var responseBody = event.target.response;
    alert("Error deleting note on server side: " + responseBody);
  } else {
    //client side code to add new note
  }
})
postRequest.send(requestBody);




///////////////////////





//client side post request for /:class/:note/editNote
var postRequest = new XMLHttpRequest();
var requestURL = '/' + "<ClassName Variable>" + '/addNote';
postRequest.open('POST', requestURL);

var requestBody = JSON.stringify({
  class : <ClassName Variable>,
  created : <createdVariable>,
  title : <NoteTitle Variable>
});

postRequest.setRequestHeader('Content-Type', 'application/json');

postRequest.addEventListener('load', function(event){
  if (event.target.status !== 200) {
    var responseBody = event.target.response;
    alert("Error editing note on server side: " + responseBody);
  } else {
    //client side code to add new note
  }
})
postRequest.send(requestBody);
