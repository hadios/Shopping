// Purpose: Send a GET request and print out the response.

var http = require('http');

var websiteName = "http://localhost/api/getcatalog";
http.get(websiteName, GetResponse);

function GetResponse (response) {
	response.on('data', PrintResponse);
	response.on('error', console.error);
}

function PrintResponse (data) {
	console.log(data.toString());
}