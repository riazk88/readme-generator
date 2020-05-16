const generateMarkdown = require("./generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");


inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: "input",
        message: "What is the name of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Please enter a description of your project",
        name: "description",
    },
    {
        type: "input",
        message: "Please enter installation instructions",
        name: "installation",
    },
    {
        type: "input",
        message: "Please enter usage information",
        name: "usage",
    },
    {
        type: "input",
        message: "Please enter contribution guidelines",
        name: "contribution",
    },
    {
        type: "input",
        message: "Please enter test instructions",
        name: "tests",
    },
    {
        type : "list", 
        message: "Choose a license for your application",
        name: "license",
        choices: ["MIT", "Apache", "GPL", "Mozilla", "LGPL", "Eclipse", "Artistic", "Affero"]
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
  ])

  .then(answers => {
    console.log(answers);
})

// function to write README file
function writeToFile(fileName, answers) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();