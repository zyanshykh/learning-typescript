"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nameFunc = exports.func = void 0;
let func = () => {
    console.log('Hello World!');
};
exports.func = func;
let nameFunc = (val) => {
    console.log("Hello World!!" + "" + val);
};
exports.nameFunc = nameFunc;
