const readline = require("readline-sync")

const input = readline.question("What is the first number?")
const input2 = readline.question("What is the second number?")
const input3 = readline.question("Type add, subtract, multiply, or divide?")


function sum (num1, num2) {
    return (num1 + num2)
}
function subtract (num1, num2){
    return (num1 - num2)
}
function multiply (num1, num2){
    return (num1 * num2)
} 
function divide (num1, num2){
    return (num1 / num2)
}
  
if(input3 === "add"){
    console.log(sum(+input, +input2))
    } else if(input3 === "subtract"){
        console.log (subtract(+input, +input2))
    } else if(input3 === "multiply"){
        console.log (multiply(+input, +input2))
    } else if(input3 === "divide"){
        console.log (divide(+input, +input2))
    }

 





