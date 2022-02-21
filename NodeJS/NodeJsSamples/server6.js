'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var uc = require('upper-case');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(uc.upperCase("Hello World!"));
    res.end();
}).listen(port);
