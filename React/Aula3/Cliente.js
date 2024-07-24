// Cliente.js
module.exports = class Cliente{
    //propriedades e funções da classe aqui
    constructor(nome, idade, email){
        this.nome = nome;
        this.idade = idade;
        this.email = email;
        this.dataCadastro = new Date();
    }
    
    isAdult(){
        return this.idade >= 18;
    }
    
    getFirstName(){
        return this.nome.split(" ")[0];
    }    
}


