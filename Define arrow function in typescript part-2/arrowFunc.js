"use strict";
let myFunc = () => {
    return true;
};
let result = myFunc();
console.log("result", result);
let newFunc = () => {
    console.log("Arrow Function");
};
let anotherFunc = () => {
    newFunc();
}, anotherFunc;
(); //
