#! /usr/bin/env node
import inquirer from "inquirer";
const userInput = await inquirer.prompt([
    {
        name: "sentance",
        message: "enter your sentance here:",
        type: "input"
    }
]);
const word = userInput.sentance.trim().split(" "); //trim is use to remove whitespacing and split is use to seperate words by space in between them.
console.log(word);
console.log(`your words are:${word.length}`);
