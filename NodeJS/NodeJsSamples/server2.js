'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var dt = require('./myfirstmodule.js');
var Addition = require('./Addition.js');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
    console.log(Addition.AddNumber(1, 2));
    console.log(process.env);
}).listen(port);
