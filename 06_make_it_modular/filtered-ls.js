var fs = require('fs');
var path = require('path');

function filter(list, ext) {
    return list.filter(function (file) {
        return path.extname(file) === '.' + ext;
    });
}

module.exports = function (dir, ext, fn) {
    fs.readdir(dir, function (err, list) {
        if (err) {
            return fn(err);
        }
        
        var files = filter(list, ext);
        
        return fn(null, files);
    });
}