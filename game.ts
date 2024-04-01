#! /usr/bin/env  node

import inquirer from "inquirer";


const randomNumber = Math.floor(Math.random() * 1 + 10);

const answer = await inquirer.prompt([{

name:"userguessnumber",
type: "number",
message: "please guess a number:",

},

]);

if(answer.userguessnumber === randomNumber){
    console.log("congragulation! you guess right number");
}else {
    console.log("you guessed wrong number");
}