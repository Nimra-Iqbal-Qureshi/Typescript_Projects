#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "firstNumber",
        message: "Enter your first number"
    },
    {
        type: "number",
        name: "secondNumber",
        message: "Enter your second number"
    },
    {
        type: "list",
        name: "operator",
        message: "Select one of the operator to perform action",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//conditional statement:
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please select valid operator");
}
