// @annotation:tour juggling_async
// 
// <-- click the blue icon in the gutter 
//     for instructions on this lesson
// 
// The README.md file contains complete instructions
// for using these tutorials.
// Then just start coding away in this file

var http = require('http');
var async = require('async');
var bl = require('bl');

var urls = [process.argv[2], process.argv[3], process.argv[4]];

function get(url) {
    return function (callback) {
        http.get(url, function (res) {
            res.setEncoding('utf8');
            res.pipe(bl(function (err, data) {
                if (err) {
                    return callback(err, data.toString());
                }
                
                return callback(null, data.toString());
            }));
        });
    };
}

async.series(urls.map(get), function (err, results) {
    results.forEach(log);
});

function log(arg) {
    console.log(arg);
}