"use strict";
// for loop
// if (1 2  3){}
Object.defineProperty(exports, "__esModule", { value: true });
// let n1 = 2;
// let n2 = 1;
// let n3 = n1 * n2 ;
// console.log(n3);
let n1 = 2;
for (let a = 1; a <= 10; a++) {
    console.log(`${n1} * ${a} = ${n1 * a}`);
    if (n1 * a == 10) {
        break;
    }
}
