const fs = require("fs");
function generateMarkdown (data) {
    return `
    # Title
    ${data.title}
    
    ## Description
    ${data.description}

    ## Table of Contents
    - [Installation] (#installation)
    - [Usage] (#usage)
    - [Contribution] (#contribution)
    - [Tests] (#tests)
    - [License] (#license)

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## Contribution
    ${data.contribution}

    ## Tests
    ${data.tests}

    ## License
    ${data.license}

    ## Questions
    https://github.com/${data.username}
    ${data.email}
    `;
}

module.exports = generateMarkdown;