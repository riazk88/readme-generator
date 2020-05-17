function generateBadge(license) {
    return `![](https://img.shields.io/static/v1?label=license&message=${license}&color=blue)`;
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
Please reach out for additional questions! <br>
GitHub Username: ${data.username}<br>
GitHub Page: https://github.com/${data.username}<br>
Email: ${data.email}<br>
`;
};

module.exports = generateReadme;