let Person = {
    nome : "nome",
    setNome : function(nome){
        this.nome = nome;
    }
    };

let Employee = {
    person : Object.create(Person),
    setPerson : function(){
        this.person.nome = 
    }
};

let Manager = {
    department : Object.create(Employee),
    manage : function(){
        
    }
}