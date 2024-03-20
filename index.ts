#! /usr/bin/env node
 import inquirer from "inquirer";

 const answer = await inquirer.prompt([
   { message: "Enter firts number", type: "number", name: "FirstNumber" },
   { message: "Enter Second number", type: "number", name: "SecondNumber" },
   {
     message: "select one of the operator to perform operation",
     type: "list",
     name: "operator",
     choices: ["Addition", "Subtraction", "Multiplication", "Division"],
   },
 ]);


// //conditional statment
 if (answer.operator ==="Addition") {
   console.log(answer. FirstNumber + answer.SecondNumber);
 }else if(answer.operator ==="Subtraction"){
   console.log(answer. FirstNumber - answer.SecondNumber);
 }else if(answer.operator ==="Multiplication"){
   console.log(answer. FirstNumber * answer.SecondNumber);
 }else if(answer.operator ==="Division"){
   console.log(answer. FirstNumber / answer.SecondNumber);
 }else {
   console.log("Please select a valid operator");
  
 }