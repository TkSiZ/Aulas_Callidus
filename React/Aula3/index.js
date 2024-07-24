//index.js
const Cliente = require("./Cliente") 
const cliente1 = new Cliente("Luiz", 31, "contato@gmail.com")
const cliente2 = new Cliente("Pedro", 5)

console.log(cliente1.nome + " é adulto? " + cliente1.isAdult());
console.log(cliente2 .nome + " é adulto? " + cliente2.isAdult());