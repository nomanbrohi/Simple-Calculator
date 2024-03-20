#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter First Number: ", type: "number", name: "FirstNumber" },
  { message: "Enter Second Number: ", type: "number", name: "SecondNumber" },
  {
    message: "Select your Operator for Operation",
    type: "list",
    name: "Operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

if (answer.Operator === "Addition") {
  console.log("Your Answer is : " + (answer.FirstNumber + answer.SecondNumber)
  );
} 
else if (answer.Operator === "Subtraction") {
  console.log("Your Answer is : " + (answer.FirstNumber - answer.SecondNumber));
} 
else if (answer.Operator === "Multiplication") {
  console.log("Your Answer is : " + answer.FirstNumber * answer.SecondNumber);
} 
else if (answer.Operator === "Division") {
  console.log("Your Answer is : " + answer.FirstNumber / answer.SecondNumber);
} 
else {
  console.log("Please Select Correct Operator");
}
