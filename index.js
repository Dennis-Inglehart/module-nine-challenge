const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    "What is the TITLE of your project? ",
    "What is the DESCRIPTION of your project? ",
    "What are the USAGE instructions for your project? ",
    "How can users make a CONTRIBUTION? ",
    "What are the TEST INSTRUCTIONS? "
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let writeYou = fs.createWriteStream(fileName);
    writeYou.write(data); // this line throws some errors, and does not populate the file at all
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: questions[0]
        },
        {
            type: "input",
            name: "description",
            message: questions[1]
        },
        {
            type: "input",
            name: "usage",
            message: questions[2]
        },
        {
            type: "input",
            name: "contribution",
            message: questions[3]
        },
        {
            type: "input",
            name: "test",
            message: questions[4]
        }
    ])
.then((answers) => {
    console.log(answers);
    writeToFile("test.md", answers);
})
}

// Function call to initialize app
init();


/*
Code snippets that might come in handy later:

The questions array as an object:

const questions = {
    title: "What is the TITLE of your project? ",
    description: "What is the DESCRIPTION of your project? ",
    usage: "What are the USAGE instructions for your project? ",
    contribution: "How can users make a CONTRIBUTION? ",
    test: "What are the TEST INSTRUCTIONS? "
};

The init function as a for...of loop:

function init() {
    for (const question of questions){
        inquirer.prompt([
        {
            type: "input",
            name: the key that goes with the question (this will need to be fixed!),
            message: question
        }
    ])}}

*/