function FuncName():number{
    let total:number = 2+2;
    return total;
}
console.log(FuncName())

// Arrow Function

let arrowFunction:()=>string = ():string=>{
    let data:string ="Arrow Function";
    return data
}
console.log(arrowFunction())