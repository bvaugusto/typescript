interface ICountString {
    valueTxt:string
    countTxt():number
}


interface IPrintTxt {
    print(value:string):void
}

class MyText implements ICountString, IPrintTxt {
    //valueTxt: any;
    //public valueTxt: any;
    constructor(public valueTxt:string) {}

    countTxt():number {
        return this.valueTxt.length
    }

    print(value:string):void {
        console.log("Text: " + value)
    }
}

var txt = new MyText("Bruno Augusto")
console.log(txt.countTxt())
txt.print("teste")

console.log("=========== Herança entre Interfaces! ===========")

interface IcarString {
    name:string
    getCar():string
}

interface IcarColor {
    color:string
    getColor():string
}

interface ICar extends IcarString, IcarColor {
    power:number
    getPower():number
}

class MyCar implements ICar {

    //constructor({ name, color, power }: { name: string; color: string; power: number }){}
    //constructor(name:string, color:string, power:number){}
    constructor(public name:string, public color:string, public power:number){}

    //power: number
    getPower(): number {
        return this.power
        //throw new Error("Method not implemented.")
    }
    
    //name: string
    getCar(): string {
        return this.name
        //throw new Error("Method not implemented.")
    }
    
    //color: string
    getColor(): string {
        return this.color
        //throw new Error("Method not implemented.")
    }
}

var camaro = new MyCar("Camaro", "Red", 45)

console.log(camaro.getCar(), camaro.getColor(), camaro.getPower())


