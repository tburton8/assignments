const readline = require ("readline-sync");

const name = readline.question ("What is your name?");
const input = readline.question("Do you want to put your hand in the hole?");
const options = ["open door", "find key"]
const index = readline.keyInSelect(options, "Do you want to open door or find key?");
const input3 = readline.keyInYN ("Do you want to open the door?");
//keyInYN returns a boolean 
//keyInSelect returns a number. Takes an array. Will take a string as a second argument


if (input === "no") { 
    console.log("next question")
} else if (input === "yes"){
    console.log("you are dead")
}

if (index === 1){
    console.log ("door is locked")
} else if (index === 2){
    console.log ("you found the key")
}
if (input3){
    console.log("You are free!")
} else if (input3){
    console.log ("Try again")
}


//("Ok," + name + "")
//if (input2){
  //  console.log("Key found")
//} else if (input2){
  //  console.log ("Door is locked")
//}