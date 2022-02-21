'use strict';

var http = require("http");
var fs = require("fs");
var port = process.env.PORT || 1337;

http.createServer(function(req,res) {
    fs.appendFile("mynewfile.txt", "Hello World!", function(err) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return
            res.end("404 Not Found");
        } else {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
        }
        res.end(console.log("Saved!"));
    });
}).listen(port);



