var http = require('http');

var port = process.argv.slice(2)[0];
var str = process.argv.slice(2)[1];

var server = http.createServer(function (req, res) {
    res.setHeader('access-control-allow-origin', '*');
    res.end(str + '\n');
});
server.listen(port);
