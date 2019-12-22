// Tipos básicos

var teste:boolean
console.log(teste) // undefined 

const teste2:boolean = true
console.log(teste2) // true

// **********************

const decimal:number = 5.4
const hex:number = 0xf00d
const binary:number = 0b1010
const octal:number = 0o744

console.log(decimal, ' - ', hex, ' - ', binary, ' - ', octal)

// **********************

var nome:string = "Bruno"
var sobrenome:string = "Augusto"
var text = `<p>Nome: ${nome}</p><p>Sobrenome: ${sobrenome}</p>`

document.body.innerHTML = text

// **********************

var fruitsArray:string[] = ["Apple", "Lemon", "Orange", "Pear"]

console.log(fruitsArray)

var car:Array<string> = ["GOLF", "BMW", "MERCEDES"]

console.log(car)

// **********************

enum Color {Red = 1, Green, Blue}

console.log(Color)
console.log(Color[0])
console.log(Color.Red)
console.log(Color.Green)
console.log(Color[2])


// **********************
//Variável dinamica
var list:any = 23
console.log(list)
list = "String ..."
console.log('string', list)


// **********************
//Void 
//Apenas apresentação

const printNumber = (num:number):void => {
    console.log(num)
}

printNumber(32)

function printNumber2(num:number):void {
    console.log(num)
}

printNumber2(2019)