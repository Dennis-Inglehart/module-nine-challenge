const inquirer = require('inquirer');
const fs = require('fs');
const { exec } = require('node:child_process');
const generateMarkdown = require('./utils/generateMarkdown');
const introString = "Inglehart readme generator ver.0.1.0\n------------------------------------\n"

// TODO: Create an array of questions for user input <- this comment came with the starter code
const contentQuestions = [
    {
        type: "input",
        name: "title",
        message: "What is the TITLE of your project? "
    },
    {
        type: "input",
        name: "description",
        message: "What is the DESCRIPTION of your project? "
    },
    {
        type: "input",
        name: "usage",
        message: "What are the USAGE instructions for your project? "
    },
    {
        type: "input",
        name: "contribution",
        message: "How can users make a CONTRIBUTION? "
    },
    {
        type: "input",
        name: "test",
        message: "What are the TEST INSTRUCTIONS? "
    },
    {
        type: "list",
        name: "license",
        message: "Under what LICENSE is your project? ",
        choices: [
            'MY PROJECT HAS NO LICENSE!',
            'Apache Liscence 2.0',
            'GNU General Public License v3.0',
            'MIT LicenseBSD 2-Clause "Simplified" License',
            'MIT LicenseBSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unlicense',
        ]
    }]

// TODO: Create a function to write README file <- this comment came with the starter code
function writeToFile(fileName, data) {
    let writeYou = fs.createWriteStream(fileName);
    writeYou.write(data);
}

// TODO: Create a function to initialize app <- this comment came with the starter code
// I feel like it's bad organization to do so many things in this one function, but whatever
function init() {
    console.clear(); console.log(introString);
    inquirer.prompt(contentQuestions)
    
.then((answers) => {
    exec('"./utils/generateMarkdown.js"', (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);})
    textToWrite =`
# ${answers.title}

## Description<hr>

${answers.description}

## Usage Instructions<hr>

${answers.usage}

## To Contribute<hr>

${answers.contribution}

## Testing Instructions<hr>
    
${answers.test}

${generateMarkdown}`;
    writeToFile("README.md", textToWrite);
})
}

// Function call to initialize app <- this comment came with the starter code
init();