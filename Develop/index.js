const inquirer = require('inquirer');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("please enter your name!");
            return false;
          }
        }
      }
      /*{
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username:',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("please enter your username!");
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmAbout',
        massage: 'Would you like to enter some information about yourself for an "About" section?',
        default: true
      },
      {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself:',
        when: ({ confirmAbout }) => confirmAbout
      } */
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init(questions) {
    return inquirer.prompt(questions);
}

// function call to initialize program
init(questions);
