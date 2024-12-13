let prompt = require ('prompt-sync')()
let n: number = parseInt(prompt("Please enter number of rows:"));
let a: string = "";
for(let i: number = 1 ; i <= n ; i++){
    for(let j: number = 1 ; j  <= i ; j++){
    a += "*";
    }
    a += "\n " // \n is line break
}
console.log(a);
