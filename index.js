// packages needed for application
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
        message: 'Provide your coding email.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Provide your github username/URL.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose the licensing needed for this project.',
        choices: [
            'MIT',
            'Apache',
            'None',
        ]
    },
];

// function for question prompts
userInput = () => {
    return inquirer.prompt(questions)
};

// function to write README file
writeToFile = (fileName, data) => {
    fs.writeFileSync(fileName, data)
}

// function to initialize app
init = () => {
    //question array
    userInput()
    //generate readme file
    .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
    //console log to show readme has been done
    .then(() => console.log('Congratulations! You have successfully written to README.md!'))
    //to catch error
    .catch((err) => console.error('Opps! There was an error.', err));
}

// function call to initialize app
init();


