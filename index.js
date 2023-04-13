const inquirer = require('inquirer');
const fs = require('fs');
const introString = "Inglehart readme generator ver.0.1.0\n------------------------------------\n"

// TODO: Create an array of questions for user input <- this comment came with the starter code
contentQuestions = [
    {
        type: "input",
        name: "title",
        message: "What is the TITLE of your project? "
    },
    {
        type: "input", // This might be better with 'editor', but that option seemed messy and complicated
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
        choices: [  // all the liscences on github's dropdown menu when you make a new repo; badges taken from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
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
    },
    {
        type: "input",
        name: "email",
        message: "What is the EMAIL ADDRESS for this project?"
    },
    {
        type: "input",
        name: "gitHub",
        message: "Under what GITHUB USERNAME can this project's repository be found?"
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
        if (answers.license === 'Apache Liscence 2.0') { // bulky if else loop that populates string literal based on license choice
            chosenLicenseOutputString = `
## License<hr>

${answers.license} [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        } else if (answers.license === 'GNU General Public License v3.0') {
            chosenLicenseOutputString = `
## License<hr>
        
${answers.license} [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
        } else if (answers.license === 'MIT LicenseBSD 2-Clause "Simplified" License') {
            chosenLicenseOutputString = `
## License<hr>

${answers.license} [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)` // same badge for "simplified", "new", and "revised", I guess?
        } else if (answers.license === 'MIT LicenseBSD 3-Clause "New" or "Revised" License') {
            chosenLicenseOutputString = `
## License<hr>
            
${answers.license} [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)` // same badge for "simplified", "new", and "revised", I guess?
        } else if (answers.license === 'Boost Software License 1.0') {
            chosenLicenseOutputString = `
## License<hr>

${answers.license} [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
        } else if (answers.license === 'Creative Commons Zero v1.0 Universal') {
            chosenLicenseOutputString = `
## License<hr>
            
${answers.license} [![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`
        } else if (answers.license === 'Eclipse Public License 2.0') {
            chosenLicenseOutputString = `
## License<hr>
    
${answers.license} [![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
        } else if (answers.license === 'GNU Affero General Public License v3.0') {
            chosenLicenseOutputString = `
## License<hr>
            
${answers.license} [![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
        } else if (answers.license === 'GNU General Public License v2.0') { // 2.0! Different than 3.0.
            chosenLicenseOutputString = `
## License<hr>
            
${answers.license} [![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
        } else if (answers.license === 'GNU Lesser General Public License v2.1') {
            chosenLicenseOutputString = `
## License<hr>

${answers.license} [![License: GPL v2](https://img.shields.io/badge/License-GPL_v2.1-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
        } else if (answers.license === 'Mozilla Public License 2.0') {
            chosenLicenseOutputString = `
## License<hr>
            
${answers.license} [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
        } else if (answers.license === 'The Unlicense') {
            chosenLicenseOutputString = `
## License<hr>
            
${answers.license} [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
        } else {
            chosenLicenseOutputString = '';
        }
    
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
${chosenLicenseOutputString}
## Questions<hr>

The ${answers.title} file repository can be found at: https://github.com/${answers.gitHub}

To contact the project leadership, email [${answers.title}](mailto:${answers.email})`;
    writeToFile("README.md", textToWrite);
})
}

// Function call to initialize app <- this comment came with the starter code
init();