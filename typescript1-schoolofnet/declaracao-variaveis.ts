var car:string = "Ferrari"

function getCar(value:string):string {
    var car = value
    return car
}

console.log(getCar('Camaro'))
console.log(car)


function testeScope() {
    return car
}

console.log('testeScope ', testeScope())

var testeA = () => {
    var a = 1;
    a = 2;
    var b = testeB();
    a=3;

    return b;

    function testeB() {
        return a;
    }
}

console.log('testeA', testeA()) // 2


var validaLet = (value:boolean) => {
    let a = 100

    if (value) {
        let b = a + 1

        return b
    }

    //return b - let tem valor somente dentro do scopo
}

console.log(validaLet(true))


var validaLet2 = (value:boolean) => {
    let a = 100

    if (value) {
        let b = a + 1

        return b
    }

    //return b - let tem valor somente dentro do scopo
}

console.log(validaLet2(false))

// ***************************

var functionNumber = (condition:boolean, num:number):number => {

    if (condition) {
        let num = 100
        return num
    }

    return num
}

console.log('functionNumber false => ', functionNumber(false, 0))

console.log('functionNumber true => ', functionNumber(true, 0))



var functionNumber2 = (condition:boolean, num:number):number => {

    if (condition) {
        let num = 100 // let não interfere as variáveis fora de condicional
        //return num
    }

    return num
}

console.log('functionNumber false => ', functionNumber2(false, 0))

console.log('functionNumber true => ', functionNumber2(true, 0))

