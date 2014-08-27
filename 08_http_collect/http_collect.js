// @annotation:tour http_collect
// 
// <-- click the blue icon in the gutter 
//     for instructions on this lesson
// 
// The README.md file contains complete instructions
// for using these tutorials.
// Then just start coding away in this file

var http = require('http');
var bl = require('bl');
var url = process.argv[2];
http.get(url, function (res) {
    res.setEncoding('utf8');
    res.pipe(bl(function (err, data) {
        if (err) return console.error(data);
        var out = data.toString();
        console.log(out.length);
        console.log(data.toString());
    }));
})
