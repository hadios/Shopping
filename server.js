// Purpose: Receive a GET request and return a string.

var http = require('http');
var url = require('url');

var portNumber = 80;

var server = http.createServer(RespondToConnection);
server.listen(portNumber);
console.log("Server STARTED!");

function RespondToConnection(request, response) {
	if (request.method != 'GET') {
		return;
	}
	
	var parsedUrl = url.parse(request.url, true);
	var result;
	
	console.log('pathname: ' + parsedUrl.pathname);
	if (parsedUrl.pathname == '/api/getcatalog') {
		result = GetCatalogList().toString();
	} else {
		result = "hello?!";
	}
	
	//response.writeHead(200, { 'Content-Type': 'application/json' });
	response.write(result);
	response.end();
}

function GetCatalogList () {
	var list = "";
	
	for (var i = 0; i < 30; i++) {
		list += i;
	}
	
	return list;
}