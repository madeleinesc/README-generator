// packages needed for this application
const inquirer = require('inquirer');



// array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide instructions on how to install your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions on how to use your project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose the licensing needed for this project.',
        choices: [
            'MIT',
            'GNU',
            'Apache 2.0',
            'BSD 3',
            'None',
        ]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide instructions as to how someone can contribute to your project',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide instructions on how to test your project',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Provide your github profile URL'
    },
];

// function for question prompts
userInput = () => {
    return inquirer.prompt(questions)
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


