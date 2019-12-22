function getHello(name) {
    return 'Hello ' + name
}
const myName = "Bruno"
document.body.innerHTML = getHello(myName)

function getHello2(name:string) {
    return 'Hello ' + name
}

const myName2 = "Bruno"
document.body.innerHTML = getHello(myName2)

function getHello3(name:string) {
    return 'Hello ' + name
}

const myName3 = "3"
document.body.innerHTML = getHello3(myName3)


interface iCar {
    brand:string
    name:string
    power:number
}

class Car {
    brand:string
    name:string
    power:number
}

const getCar = (car:iCar) => {
    console.log(car.brand, ' - ', car.name,' - ', car.power)
}

const Camaro = new Car()
Camaro.brand = "Chevrolet"
Camaro.name = "Camaro"
Camaro.power = 200

getCar(Camaro)
