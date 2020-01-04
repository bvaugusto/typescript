interface IPeople {
    name:string;
    age:number;
}

function people(value:IPeople):void {
    console.log(value)
}

people({name:"Bruno", age:35});

function people2(name:string, age:number):IPeople {
    return {name:name, age:age}
}

people2("Yasmin", 29)

console.log(people2("Yasmin", 29));

interface IColor {
    title?:string;
    codeColor:string;
}

function getColor(codeColor:string, title?:string):IColor {
    if (title) {
        return {title:title, codeColor:codeColor}
    }
    return {codeColor:codeColor}
}

console.log(getColor("#000"))

console.log(getColor("#000", "black"))