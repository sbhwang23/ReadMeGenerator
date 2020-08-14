const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'What is the title of the project?'
},
{
    type: 'input',
    name: 'description',
    message: 'Give a brief discription of the project.'
},
{
    type: 'input',
    name: 'installation',
    message: 'Installation instructions'
},
{
    type: 'input',
    name: 'usage',
    message: 'Usage information'
},
{
    type: 'list',
    name: 'license',
    message: 'License information:',
    choices: [
        'GNU GPLv3',
        'GNU GPLv2',
        'Apache 2.0',
        'BSD 3-Clause',
        'BSD 2-Clause',
        'MIT',
        'ISC'
    ]
},
{
    type: 'input',
    name: 'contributing',
    message: 'Contribution guidelines'
},
{
    type: 'input',
    name: 'test',
    message: 'Test instructions'
},
{
    type: 'input',
    name: 'github',
    message: 'What is your Github username?'
},
{
    type: 'input',
    name: 'email',
    message: 'What is your Email address?'
},

];

// function to write README file
function writeToFile(fileName, data) {
    }

// function to initialize program
function init() {
}

// function call to initialize program
init();
