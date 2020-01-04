class Car {
    
    constructor(
        public name: string,
        public color: string,
        public power: number
    ) {}

    printCar():void {
        console.log(this.name, this.color, this.power)
    }
}

var camaro = new Car("Camaro", "Yellow", 220)
camaro.printCar()

class Car2 {
    
    private _name: string
    private _color: string
    private _power: number
    public static list: Array<string> = []

    constructor(newName: string, newColor: string, newPower: number) {
        this._name = newName
        this._color = newColor
        this._power = newPower

        Car2.list.push(newName)
    }

    get name() : string {
        return this._name
    }

    
    set name(value : string) {
        this._name = value
    }

    getName():string {
        return this._name
    }

    setName(value:string) {
        this._name = value
    }
}

var ferrari = new Car2("Ferrari", "Red", 220)
console.log(ferrari)
//ferrari._name = "Camaro"
console.log(Car2.list)

var camaro2 = new Car2("Camaro2", "Red", 300)
console.log(Car2.list)

ferrari.name = "Ferrari 2"
console.log(ferrari.name)
console.log(Car2.list)

ferrari.setName("Ferrari 3")
console.log(ferrari.getName())






