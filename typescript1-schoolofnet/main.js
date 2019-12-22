// Tipos básicos
var teste;
console.log(teste); // undefined 
var teste2 = true;
console.log(teste2); // true
// **********************
var decimal = 5.4;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log(decimal, ' - ', hex, ' - ', binary, ' - ', octal);
// **********************
var nome = "Bruno";
var sobrenome = "Augusto";
var text = "<p>Nome: " + nome + "</p><p>Sobrenome: " + sobrenome + "</p>";
document.body.innerHTML = text;
// **********************
var fruitsArray = ["Apple", "Lemon", "Orange", "Pear"];
console.log(fruitsArray);
var car = ["GOLF", "BMW", "MERCEDES"];
console.log(car);
// **********************
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
console.log(Color);
console.log(Color[0]);
console.log(Color.Red);
console.log(Color.Green);
console.log(Color[2]);
// **********************
//Variável dinamica
var list = 23;
console.log(list);
list = "String ...";
console.log('string', list);
// **********************
//Void 
//Apenas apresentação
var printNumber = function (num) {
    console.log(num);
};
printNumber(32);
function printNumber2(num) {
    console.log(num);
}
printNumber2(2019);
