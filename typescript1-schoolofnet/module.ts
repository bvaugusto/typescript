module App {

    export class Car {
        nome:string
        color:string
    }
}

var mustang = new App.Car

console.log(mustang)

module App {
    
    var ferrari = new Car
    console.log(ferrari)
}

module App {

    export interface ICar {
        name:string
    }
}

module App {

    class Car implements ICar {
        name:string
        color:string
    }

    var bmw = new Car
    console.log(bmw)
}