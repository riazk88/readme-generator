function generateReadme (data) {
    return `

    # Title
    ${data.title}
    
    ## Description
    ${data.description}

    ## Table of Contents
    * [Installation] (#installation)
    * [Usage] (#usage)
    * [Contribution] (#contribution)
    * [Tests] (#tests)
    * [License] (#license)

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