const http = require('http');
const url = require('url')
const fs = require('fs');
const folderName = '../LOG'
const port  = 8080

const server = http.createServer((req, res) =>{
    var q = url.parse(req.url, true)
    var filename = '../frontend' + q.pathname;
    try{
        if(!fs.existsSync(folderName)){
            fs.mkdirSync(folderName);
            console.log('Diretório criado com sucesso!')
        }
    }catch(err){
        console.log(err)
    }
    fs.readFile(filename, function(err, data){
        if(err){
            res.writeHead(404, {'Content-Type':'text/html'})
            return res.end('404 Not Found');
        }
        res.writeHead(202, {'Content-Type':'text/html'})
        res.write(data)
        return res.end();
    })
})

server.listen(port, () => {
    console.log(`Servidor rodando em <http://localhost>: ${port}`)
});