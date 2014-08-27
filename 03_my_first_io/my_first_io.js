// @annotation:tour my_first_io
// 
// <-- click the blue icon in the gutter 
//     for instructions on this lesson
// 
// The README.md file contains complete instructions
// for using these tutorials.
// Then just start coding away in this file
var fs = require('fs');

function getCharCount(char, path) {
    var fileContents = fs.readFileSync(path, 'utf8');
    return fileContents.split(char).length - 1;
}

var path = process.argv[2] || '';
var numLines = 0;
if (path.length) {
    numLines = getCharCount('\n', path);
}

console.log(numLines);