const prompt = require('prompt-sync')();

let number_1 = parseInt(prompt("Kindly enter your first number"));
let number_2 = parseInt(prompt("Kindly enter your second number"));
let operator = prompt("Select a operator (+, -, *, /,) =");

if (operator == "+") {
    console.log(`Your answer of ${number_1} ${operator} ${number_2} = ${number_1 + number_2}`);
}
if (operator == "-") {
    console.log(`Your answer of ${number_1} ${operator} ${number_2} = ${number_1 - number_2}`);
}
if (operator == "*") {
    console.log(`Your answer of ${number_1} ${operator} ${number_2} = ${number_1 * number_2}`);
}
if (operator == "/") {
    console.log(`Your answer of ${number_1} ${operator} ${number_2} = ${number_1 / number_2}`);
} else {
    console.log("Please select a valid operator (+, -, *, /)");
}