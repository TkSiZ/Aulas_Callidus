var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, resp){
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function(err, data){
        if(err){
            resp.writeHead(404, {'Content-Type': 'text/html'})
            return resp.end('404 Not Found');
        }
        resp.writeHead(200, {'Content-Type' : 'text/html'})
        resp.write(data);
        return resp.end();
    });
}).listen(8080);