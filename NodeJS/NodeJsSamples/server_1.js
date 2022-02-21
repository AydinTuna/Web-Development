'use strict';

// it reads a JavaScript file, executes the file, and then proceeds to return an object.
// Using this object, one can then use the various functionalities available in the module called by the require function.
var http = require('http'); //built-in modules

var port = process.env.PORT || 1337;

http.createServer(function (req, res) { //This function is called, whenever a request is made to our server application. 
    res.writeHead(200, { 'Content-Type': 'text/html' }); //to send header data to the client
    res.write('<h1>Head<\h1>\n')
    res.end('Hello World\n'); //the end function will close the connection to the client.

    console.log('This example is different!');
    console.log('The result is displayed in the Command Line Interface');
}).listen(port); //to make our server application listen to client requests on port no. You can specify any available port over here.
