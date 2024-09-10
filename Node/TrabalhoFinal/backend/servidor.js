const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const querystring = require('querystring'); // Importa o módulo querystring
const port = 8080;

const folderPath = path.join(__dirname, 'LOG');
const filePath = path.join(folderPath, 'ALUNO.LOG');

const server = http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    const filename = path.join(__dirname, '../frontend', q.pathname); // Caminho absoluto

    if (req.method === 'POST' && req.url === '/api/save-log') {
        let body = '';

        // Coleta os dados enviados
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const data = querystring.parse(body);
            const logEntry = `Nome: ${data.nome}, Idade: ${data.idade}, Gênero: ${data.genero}, Cidade: ${data.cidade}, Escolaridade: ${data.escolaridade}\n`;

            // Cria o diretório se não existir
            fs.mkdir(folderPath, { recursive: true }, err => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Erro ao criar diretório');
                    return;
                }

                // Adiciona os dados ao arquivo de log
                fs.appendFile(filePath, logEntry, err => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                        res.end('Erro ao adicionar dados ao arquivo de log');
                        return;
                    }

                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end('Dados salvos com sucesso!');
                });
            });
        });

    } else {
        fs.readFile(filename, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                return res.end('404 Not Found');
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    }
});

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
