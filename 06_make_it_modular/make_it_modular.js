// @annotation:tour make_it_modular
// 
// <-- click the blue icon in the gutter 
//     for instructions on this lesson
// 
// The README.md file contains complete instructions
// for using these tutorials.
// Then just start coding away in this file

var filter = require('./filtered-ls');
var dir = process.argv[2];
var ext = process.argv[3];

filter(dir, ext, function (err, files) {
    if (err) {
        log(err);
    }
    files.forEach(log);
});

function log(arg) {
    console.log(arg);
}
