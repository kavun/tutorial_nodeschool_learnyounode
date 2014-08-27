// @annotation:tour time_server
// 
// <-- click the blue icon in the gutter 
//     for instructions on this lesson
// 
// The README.md file contains complete instructions
// for using these tutorials.
// Then just start coding away in this file

var net = require('net');
var moment = require('moment');

net.createServer(create).listen(process.argv[2]);

function create(socket) {
    socket.end(time())
}

function time() {
    return moment().format('YYYY-MM-DD hh:mm') + '\n'
}