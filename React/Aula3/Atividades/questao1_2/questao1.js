// Questao 1 e 2 na real 

let Person = {
    nome : "nome", 
    greet : function() {
        console.log("SAUDAÇÕESSS");
    }
};

let Student = Object.create(Person);
Student.nome = "Matheus Takashi Maruoka Vieira";

// Adicionando novos métodos
Student.course = "Sistemas de Informação";
Student.introduce = function(){
    console.log("Prazer, meu nome é " + this.nome + ", meu curso é " + this.course + " e eu tenho: " + this.age + " anos");
}

Student.setAge = function(age){
    Student.age = age
}

Student.getAge = function() {
    return this.age;
}
Student.setAge(19);
Student.introduce();