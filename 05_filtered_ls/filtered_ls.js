// @annotation:tour filtered_ls
// 
// <-- click the blue icon in the gutter 
//     for instructions on this lesson
// 
// The README.md file contains complete instructions
// for using these tutorials.
// Then just start coding away in this file

var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, function (err, list) {
    if (err) throw err;
    var files = filter(list, ext);
    output(files);
});

function filter(list, ext) {
    return list.filter(function (file) {
        return path.extname(file) === '.' + ext;
    });
}

function output(files) {
    files.forEach(function (file) {
        console.log(file);
    });
}