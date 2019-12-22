var car = "Ferrari";
function getCar(value) {
    var car = value;
    return car;
}
console.log(getCar('Camaro'));
console.log(car);
function testeScope() {
    return car;
}
console.log('testeScope ', testeScope());
var testeA = function () {
    var a = 1;
    a = 2;
    var b = testeB();
    a = 3;
    return b;
    function testeB() {
        return a;
    }
};
console.log('testeA', testeA()); // 2
var validaLet = function (value) {
    var a = 100;
    if (value) {
        var b = a + 1;
        return b;
    }
    //return b - let tem valor somente dentro do scopo
};
console.log(validaLet(true));
var validaLet2 = function (value) {
    var a = 100;
    if (value) {
        var b = a + 1;
        return b;
    }
    //return b - let tem valor somente dentro do scopo
};
console.log(validaLet2(false));
// ***************************
var functionNumber = function (condition, num) {
    if (condition) {
        var num_1 = 100;
        return num_1;
    }
    return num;
};
console.log('functionNumber false => ', functionNumber(false, 0));
console.log('functionNumber true => ', functionNumber(true, 0));
var functionNumber2 = function (condition, num) {
    if (condition) {
        var num_2 = 100; // let não interfere as variáveis fora de condicional
        //return num
    }
    return num;
};
console.log('functionNumber false => ', functionNumber2(false, 0));
console.log('functionNumber true => ', functionNumber2(true, 0));
