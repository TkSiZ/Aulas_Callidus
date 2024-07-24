// Objeto protótipo base

let animal = {
    species : 'unknown', 
    speak: function(){
        console.log('The ' + this.species + 'makes a sound. ');
    }
};

// Criando um novo objeto 
let dog = Object.create(animal);
dog.species = 'dog';

// Adicionando um novo método ao objeto 'dog'
dog.bark = function() {
    console.log('Woof! Woof! CARALHO!');
};

dog.speak();  // Saída: The dog fala
dog.bark();  //the dog late pra caralho