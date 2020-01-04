interface ITypeFunction {
    (a:number, b:number):boolean;
}

var add: ITypeFunction;
add = (varA:number, varB:number):boolean => {
    return true
}

interface IColor {
    (codeColor:string, title?:string):{codeColor:string, title?:string}
}

var getNewColor:IColor;
getNewColor = function(codeColor:string, title?:string):{codeColor:string, title?:string} {
    
    if (title) {
        return {codeColor, title}
    }

    return {codeColor}
}

console.log(getNewColor("#000", "black"))


interface IArrayTypeString {
    [index:number]:string
}

var a:IArrayTypeString
a = ["teste"]
console.log('a => ', a)
a = ["teste", 27]
console.log('a => ', a)

interface IArrayTypeNumber {
    [index:string]:number
}

var b:IArrayTypeNumber
b = [1]
console.log('b => ', b)
b = [1, 'teste b']
console.log('b => ', b)


interface IArrayString {
    [index:string]:string
}

var c:IArrayString
c = ['1']
console.log('c => ', c)
c = ["1", 'teste c']
console.log('c => ', c)

