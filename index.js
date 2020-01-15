const fs = require("fs");
const inquirer = require("inquirer");

let questions = [
    {
        message: 'What is your github username?',
        name: 'username',
    },
    {
        message: 'What is your favorite color',
        name: 'color',
        type: 'list',
        choices: ['green', 'blue', 'pink', 'red'],
    }
]
console.log(questions)

// switch (color) {
//     case 'green':
//     break;
//     case 'blue':
//     break;
//     case 'pink':
//     break;
//     case 'red':
//     break;
// }
// console.log(color)




