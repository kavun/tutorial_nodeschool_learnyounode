// @annotation:tour http_file_server
// 
// <-- click the blue icon in the gutter 
//     for instructions on this lesson
// 
// The README.md file contains complete instructions
// for using these tutorials.
// Then just start coding away in this file

var http = require('http');
var fs = require('fs');

var port = process.argv[2]
var file = process.argv[3];

http.createServer(handleRequests).listen(port);

function handleRequests(req, res) {
    serve(res);
}

function serve(res) {
	var stream = fs.createReadStream(file, 'utf8').on('open', function () {
        stream.pipe(res);
    })
}
