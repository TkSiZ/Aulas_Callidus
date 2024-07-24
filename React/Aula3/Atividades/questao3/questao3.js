let car = {
    make : "make",
    model : "modelo",
    start : function(){
        console.log("O carro está ligado"); 
    }
};

let EletricCar = Object.create(car);
EletricCar.make = "Tesla";
EletricCar.model = "Hb20";
EletricCar.bateryLevel = 20;
EletricCar.charge = function(){
    this.bateryLevel += 10;
}

EletricCar.start();
console.log('O carro está com ' + EletricCar.bateryLevel + '%');
EletricCar.charge();
console.log('O carro está sendo carregado e está com ' + EletricCar.bateryLevel + '%')