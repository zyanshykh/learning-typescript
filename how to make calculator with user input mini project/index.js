var prompt = require("prompt-sync")();
let n1 = parseInt(prompt('please enter your first Number'));
let n2 = parseInt(prompt('please enter your second Number'));
let operator = prompt("Please enter your operator ( + , - , * , / ):");
if (operator == '+') {
    console.log(`The Answer of${n1} ${operator} ${n2} = ${n1 + n2} `);
}
else if (operator == '-') {
    console.log(`The Answer of${n1} ${operator} ${n2} = ${n1 - n2} `);
}
else if (operator == '*') {
    console.log(`The Answer of${n1} ${operator} ${n2} = ${n1 * n2} `);
}
else if (operator == '/ ') {
    console.log(`The Answer of ${n1} ${operator} ${n2} = ${n1 / n2} `);
}
else {
    console.log("Please select operator");
}
export {};
