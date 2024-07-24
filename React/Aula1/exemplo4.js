let pessoa = {nome : "Alice", idade : 30, cidade: "São Paulo" };
for(let chave in pessoa){
    console.log( chave + ": " + pessoa[chave]);
}