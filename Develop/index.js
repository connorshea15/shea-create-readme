const inquirer = require('inquirer');
// Variable connected to generateMardown function in generateMarkdown.js
const generateReadMe = require('./utils/generateMarkdown.js');
// Variable connected to writeReadMe function in write-read-me.js
const writeReadMe = require('./utils/write-read-me.js')

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
        validate: nameInput => validateInput(nameInput)
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: nameInput => validateInput(nameInput)
      },
      {
        type: 'input',
        name: 'project',
        message: 'What is your project name?',
        validate: nameInput => validateInput(nameInput)
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter a short description of your project:',
        validate: nameInput => validateInput(nameInput)
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'license',
        message: 'What kind of License should your project have?',
        validate: nameInput => validateInput(nameInput)
      },
      {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install dependencies?',
        validate: nameInput => validateInput(nameInput)
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter instructions for using this application:',
        validate: nameInput => validateInput(nameInput)
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Enter instructions for contributing to this application:',
        validate: nameInput => validateInput(nameInput)
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
        validate: nameInput => validateInput(nameInput)
      }
];

// One function for validating all user input in prompt
const validateInput = userInput => {
    if (userInput) {
        return true;
      } else {
        console.log("please enter a value!");
        return false;
      }
};

// function to initialize program
function init(questions) {
    return inquirer.prompt(questions);
}

// function call to initialize program 
init(questions)
    // pass object containing user input to generateMardown function 
    // in generateMardown.js
    .then(userAnswers => {
        return generateReadMe(userAnswers);
    })
    // Invoke writeReadMe function from write-read-me.js passing template
    // literal from generateReadMe in generateMarkdown.js as argument
    .then(sameData => {
        return writeReadMe(sameData);
    });

