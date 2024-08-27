var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2024&month=august';

// parse do endereço 

var q = url.parse(adr, true);

// o parse devolve o conteudo da url em formato de objetos e suas propriedades
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;
console.log(qdata.month);