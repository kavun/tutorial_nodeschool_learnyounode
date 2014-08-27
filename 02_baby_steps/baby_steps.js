// @annotation:tour baby_steps
// 
// <-- click the blue icon in the gutter 
//     for instructions on this lesson
// 
// The README.md file contains complete instructions
// for using these tutorials.
// Then just start coding away in this file
var sum = 0
for (var i = 2, l = process.argv.length; i < l; i++) {
    sum += parseInt(process.argv[i], 10);
}
console.log(sum);