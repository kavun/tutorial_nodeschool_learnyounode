// @annotation:tour http_client
// 
// <-- click the blue icon in the gutter 
//     for instructions on this lesson
// 
// The README.md file contains complete instructions
// for using these tutorials.
// Then just start coding away in this file


var http = require('http');

var url = process.argv[2];

http.get(url, handleStream);

function handleStream(res) {
    res.setEncoding('utf8');
    res.on('data', log);
}

function log(arg) {
    console.log(arg);
}