#! /usr/bin/env  node

import inquirer from "inquirer";
console.log("WELCOME TO GUESSING GAME");

const randomNumber = Math.floor(Math.random() * 1 + 10);

const answer = await inquirer.prompt([{

name:"userguessnumber",
type: "number",
message: "please guess a number 1 to 10:",

},

]);

if(answer.userguessnumber === randomNumber){
    console.log("congragulation! you guess right number");
}else {
    console.log("you guessed wrong number,please try again");
}
