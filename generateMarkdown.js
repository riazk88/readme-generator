function generateMarkdown (answers) {
    return `
    # Title
    ${answers.title}
    
    ## Description
    ${answers.description}

    ## Table of Contents
    - [Description] (#description)
    - [Installation] (#installation)
    - [Usage] (#usage)
    - [Contribution] (#contribution)
    - [Tests] (#tests)
    - [License] (#license)

    ## Installation
    ${answers.installation}

    ## Usage
    ${answers.usage}

    ## Contribution
    ${answers.contribution}

    ## Tests
    ${answers.tests}

    ## License
    ${answers.license}

    ## Questions
    ${answers.questions}
    https://github.com/${answers.username}
    ${answers.email}
    `;
}

module.exports = generateMarkdown;