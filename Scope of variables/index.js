"use strict";
//             Variables Used
Object.defineProperty(exports, "__esModule", { value: true });
// Var : function scoped 
// let: block scoped
// const:block scoped
// let userName:string="Zayan"
// userName= "Wahaj"
// console.log(userName)
const func = () => {
    if (true) {
        var userName = "computer";
    }
    userName = "Wahaj + Zayan";
    console.log(userName);
};
func();
