"use strict";
// let arr = ["Easein","Worthiness","Aurelia",["Aasive","Happiness","Fitness"]];
// console.log("Array:",arr);
// console.log("index 0:",arr[0]);
// console.log("index 1:",arr[1]);
// console.log("index 2:",arr[2]);
// console.log("nested arr index 0:",arr[2][0]);
// console.log("nested arr index 1:",arr[2][1]);
Object.defineProperty(exports, "__esModule", { value: true });
let arr = ["Easein", "Worthiness", ["Happiness", "Fitness"]];
let nestedArr = arr[2];
console.log(nestedArr[0]);
console.log(nestedArr[1]);
