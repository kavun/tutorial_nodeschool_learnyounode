// @annotation:tour http_json_api_server
// 
// <-- click the blue icon in the gutter 
//     for instructions on this lesson
// 
// The README.md file contains complete instructions
// for using these tutorials.
// Then just start coding away in this file

var http = require('http');
var url = require('url');

var port = process.argv[2];
var router = require('events').EventEmitter;
router = new router();

http.createServer(requestListener).listen(port);

function requestListener(req, res) {
    if (req.method.toLowerCase() == 'get') get(req, res);
}

function get(req, res) {
    var parsed = url.parse(req.url, true);
    router.emit(parsed.pathname, req, res);    
}

router.on('/api/parsetime', parsetime);
router.on('/api/unixtime', unixtime);

function parsetime(req, res) {
    var query = url.parse(req.url, true).query;
    var time = new Date(query.iso);
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }));
}

function unixtime(req, res) {
    var query = url.parse(req.url, true).query;
    var time = new Date(query.iso);
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        unixtime: time.getTime()
    }));
}