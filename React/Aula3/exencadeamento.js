// Objeto protótipo base 
// encadeamento de protótipos

let person = {
    name: 'unknown',
    greet: function() {
        console.log('Hello, my name is ' + this.name);
    }
}

// Criando um novo projeto
let employee = Object.create(person);
employee.name =  'John';
employee.job = 'Software Development'

// Adicionando um método ao protótipo de 'employee'
employee.describeJob = function() {
    console.log('I am a ' + this.job);
};

employee.greet();  // Saída: Hello, my name is John 
employee.describeJob(); // Saída: I am a Software Developer 