"use strict";
// Object
Object.defineProperty(exports, "__esModule", { value: true });
// Syntex
let user = {
    firstName: "Zayan",
    lastName: "Sheikh",
    age: 20,
    hobbies: ["Football", "cricket", "Gaming"],
    salary: () => 20000,
    email: "xzx@gmail.com",
    office: {
        address: " adc test",
        name: "Typescript"
    }
};
for (let key in user) {
    console.log(user, key);
}
// console.log(user.office.name)
