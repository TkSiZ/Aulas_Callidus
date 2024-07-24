// Objeto protótpo base 

let shape = {
    type : 'shaper',
    getType : function() {
        return this.type;
    }
};

// Criando um novo objeto 
let circle = Object.create(shape);
circle.type = 'circle';

// Adicionando um método específico ao 'circle'

circle.getArea = function(radius) {
    return Math.PI * radius * radius;
};

console.log(circle.getType());
console.log(circle.getArea(9));