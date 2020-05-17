function generateBadge(license) {
    return `![](https://img.shields.io/static/v1?label=license&message=${license}&color=blue)`;
    // if (license == "GITHUB License") {
    //     return `![GitHub](https://img.shields.io/github/license/riazk88/mnb-readme-generator)`
    // } else if (license == "NPM License") {
    //     return `![NPM](https://img.shields.io/npm/l/inquirer)`
    // }
}

function generateReadme (data) {
return `
# Title
${data.title}

${generateBadge(data.license)}
    
## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Tests](#tests)
* [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Tests
${data.tests}

## License
This application is covered under the ${data.license} license.

## Questions
Please reach out for additional questions!
GitHub Username: ${data.username}
GitHub Page: https://github.com/${data.username}
Email: ${data.email}
`;
};

module.exports = generateReadme;