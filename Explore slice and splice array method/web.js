"use strict";
// Slice.
// The slice () method returns selected elements in an array , as a new array.
// The slice () method does not change the original array.
// return selected elements.   
Object.defineProperty(exports, "__esModule", { value: true });
// let arr:string[] = ["Zayan","Sheikh","Wahaj","Ali","Qaisam"];
// let newArr:string[]= arr.slice(1,3);
// console.log(newArr);
// console.log("org arr",arr);
// Splice .
// The splice () method adds  and/or removes array elements.
//The splice() method overwrites the original array .
// return deleted elements in Array .
let arr1 = ["Ali", "Sheikh", "Wahaj", "Zayan", "Qaisam"];
let deletedElements = arr1.splice(1, 2, "Zayan", "Google");
console.log(arr1);
console.log(deletedElements);
