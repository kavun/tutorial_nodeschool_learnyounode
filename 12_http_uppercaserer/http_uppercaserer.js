// @annotation:tour http_uppercaserer
// 
// <-- click the blue icon in the gutter 
//     for instructions on this lesson
// 
// The README.md file contains complete instructions
// for using these tutorials.
// Then just start coding away in this file

var http = require('http');
var EventEmitter = require('events').EventEmitter;
var map = require('through2-map');

var events = new EventEmitter();
var port = process.argv[2];

http.createServer(function (req, res) {
    if (req.method === 'POST') {
		events.emit('post', req, res);     
    }
}).listen(port);

events.on('post', function (req, res) {
    req.pipe(map(upper)).pipe(res);
});

function upper(chunk) {
    return chunk.toString().toUpperCase();
}