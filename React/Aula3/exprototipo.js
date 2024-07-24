// Definindo um objeto protótipo 

let animal = {
    tipo : 'animal',
    som: function() {
        console.log('Som de um ' + this.tipo)
    }
};

// Criando um objeto baseado no protótipo 

let cachorro = Object.create(animal);
cachorro.tipo = 'cachorro';
cachorro.som(); // Saída : som de um cachorro
