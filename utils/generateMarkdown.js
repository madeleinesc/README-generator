// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
renderLicenseBadge = (license) => {
  if (license == 'None') {
    return '';

  } else if (license === 'MIT') {
    return '![License](https://img.shields.io/badge/License-MIT9cf-?style=social&logo=appveyor)'

  } else if (license === 'Apache') {
    return '![License](https://img.shields.io/badge/License-Apacheff69b4-?style=social&logo=appveyor)'

  }
}
renderLicenseBadge()


// function that returns the license link
// If there is no license, return an empty string
renderLicenseLink = (license) => {
  if (license == 'None') {
    return '';

  } else if (license === 'MIT') {
    return '![License](https://img.shields.io/badge/License-MIT9cf-?style=social&logo=appveyor)'

  } else if (license === 'Apache') {
    return '![License](https://img.shields.io/badge/License-Apacheff69b4-?style=social&logo=appveyor)'
  }
}
renderLicenseLink()




// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
renderLicenseSection = (license) => {
  if (license === 'None') {
    return ''
  };
  return '# License'
}
renderLicenseSection()

// function to generate markdown for README
generateMarkdown = (data) => {
  return `# ${data.title}

 

  # Table of Contents:
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [Credits](#credits)
  - [License](#license)

  # Description
  ${data.description}

  # Installation
  ${data.installation}

  # Usage
  ${data.usage}

  # Contributing
  ${data.contributing}

  # Tests
  ${data.tests}

  # Questions
  If you have any queries or questions in relation to this application, please send to ${data.questions}.

  # Credits
  ${data.credits}

  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
`;
}

// export this module to use in main module (index.js)
module.exports = generateMarkdown;
