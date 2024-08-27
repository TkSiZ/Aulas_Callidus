// Versão mais mostra tudo 

const http = require('http');

const server = http.createServer((req, resp) =>{
    resp.statusCode = 200;
    resp.setHeader('Content-Type', 'text/plain');
    resp.end('Olá Mundo')
})

const port = 3000;
server.listen(port, () => {
    console.log(`Servidor rodando em <http://localhost>: ${port}/`)
});
