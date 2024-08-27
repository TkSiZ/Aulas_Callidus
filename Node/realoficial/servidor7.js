var http = require('http');
var dt = require('./datasistema.js');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'text/html'})
    res.write('A data e hora atual do sistema e: ' + dt.myDateTime());
    res.end();
}).listen(8080);