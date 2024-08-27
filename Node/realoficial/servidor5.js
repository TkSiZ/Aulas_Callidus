const http = require('http');

const servidor = http.createServer(function(req, res){
    console.log('servidor funcionando');
    res.end(`
        <html>
            <head>
                <title> Página do servidor</title>
            </head>
            <body>
                <h1> Código de resposta do servidor</h1>
            </body>
        </html>
    `);
}).listen(8080);