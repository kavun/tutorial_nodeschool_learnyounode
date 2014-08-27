// @annotation:tour my_first_async_io
// 
// <-- click the blue icon in the gutter 
//     for instructions on this lesson
// 
// The README.md file contains complete instructions
// for using these tutorials.
// Then just start coding away in this file

var fs = require('fs');

function getCharCount(char, path) {
    fs.readFile(path, 'utf8', function (err, data) {
        if (err) throw err;
        
        console.log(data.split(char).length - 1);
    });
}

var path = process.argv[2] || '';
if (path.length) {
    getCharCount('\n', path);
} else {
    console.log(0);
}