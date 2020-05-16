const inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type : "list", 
        message: "Choose a license for your application",
        name: "license",
        choices: ["MIT", "Apache", "GPL", "Mozilla", "LGPL", "Eclipse", "Artistic", "Affero"]
    },
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
        name: "test",
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
    // Use user feedback for... whatever!!
    console.log(answers);
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });