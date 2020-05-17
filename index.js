const inquirer = require("inquirer");
const fs = require("fs");
const generateReadme = require("./Develop/utils/generateMarkdown");


function promptUser () {
  return inquirer.prompt([
    /* Pass your questions in here */
    {
        type: "input",
        message: "What is your GitHub username? (Required)",
        name: "username",
        validate : nameInput => {
            if (nameInput) {
                return true;
                } else {
                console.log('Please enter GitHub username!')
                return false;
                }
            }
        },
    {
        type: "input",
        message: "What is your email address? (Required)",
        name: "email",
        validate : nameInput => {
            if (nameInput) {
                return true;
                } else {
                console.log('Please enter email address!')
                return false;
                }
            }
        },
    {
        type: "input",
        message: "What is the name of your project? (Required)",
        name: "title",
        validate : nameInput => {
            if (nameInput) {
                return true;
                } else {
                console.log('Please enter your project name!')
                return false;
                }
            }
        },
    {
        type: "input",
        message: "Please enter a description of your project (Required)",
        name: "description",
        validate : nameInput => {
            if (nameInput) {
                return true;
                } else {
                console.log('Please enter a description!')
                return false;
                }
            }
        },
    {
        type: "input",
        message: "Please enter installation instructions",
        name: "installation",
        validate : nameInput => {
            if (nameInput) {
                return true;
                } else {
                console.log('Please enter installation instructions!')
                return false;
                }
            }
        },
    {
        type: "input",
        message: "Please enter usage information",
        name: "usage",
        validate : nameInput => {
            if (nameInput) {
                return true;
                } else {
                console.log('Please enter usage information!')
                return false;
                }
            }
        },
    {
        type: "input",
        message: "Please enter contribution guidelines",
        name: "contribution",
        validate : nameInput => {
            if (nameInput) {
                return true;
                } else {
                console.log('Please enter contribution guidelines!')
                return false;
                }
            }
        },
    {
        type: "input",
        message: "Please enter test instructions",
        name: "tests",
        validate : nameInput => {
            if (nameInput) {
                return true;
                } else {
                console.log('Please enter test instructions!')
                return false;
                }
            }
        },
    {
        type : "list", 
        message: "Choose a license for your application",
        name: "license",
        choices: ["MIT", "Apache", "GPL", "Mozilla", "LGPL", "Eclipse", "Artistic", "Affero", "Unlicense"]
    },
  ])
};

// function to initialize program
const init=() => {
    console.log (`
    =================
    Generate a README
    =================
`);

promptUser()
  .then(data => {

    fs.writeFile('./Develop/README.md', generateReadme(data), err => {
      if (err) throw new Error(err);

      console.log('README created! Check out README.md in the Develop folder to see it!');
    });
  })
}

// function call to initialize program
init();