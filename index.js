// packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");



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
        type: 'input',
        name: 'contributing',
        message: 'Provide instructions as to how someone can contribute to your project.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide instructions on how to test your project.',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Provide instructions on how a user can get in contact for any questions.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Enter your github name for repo credits.'
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



];

// function for question prompts
userInput = () => {
    return inquirer.prompt(questions)
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app


init = () => {
    userInput()

}

// Function call to initialize app
init();


