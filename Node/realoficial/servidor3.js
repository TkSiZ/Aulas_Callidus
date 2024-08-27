// Versão simplificada do servido1.js

var http = require('http');

http.createServer(function(req, resp){
    resp.writeHead(200, {'Content-Type': 'text/plain'});
    resp.write('Teste de servidor do Node\n');
    resp.end();
}).listen (8080);