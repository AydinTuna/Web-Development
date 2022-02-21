'use strict';

var http = require("http");
var fs = require("fs");
var port = process.env.PORT || 1337;

http.createServer(function(req,res){
    fs.rename("mynewfile.txt", "myrenamefile.txt", function(err) {
        if (err) throw err;
        console.log("file renamed");
    });
}).listen(port);