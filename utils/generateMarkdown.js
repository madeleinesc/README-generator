// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
renderLicenseBadge = (license) => {
  if (license == 'None') {
    return '';

  } else if (license === 'MIT') {
    return '![License](https://img.shields.io/badge/License-MIT-9cf)'

  } else if (license === 'Apache') {
    return '![License](https://img.shields.io/badge/License-Apache-ff69b4)'

  } else if (license === 'GNU') {
    return '![License](https://img.shields.io/badge/License-GNU-yellow)'

  } else if (license === 'BSD') {
    return '![License](https://img.shields.io/badge/License-BSD-green)'

  }
}



// function that returns the license link
// If there is no license, return an empty string
renderLicenseLink = (license) => {
  if (license == 'None') {
    return ``;

  } else if (license === 'MIT') {
    return `[${license}](https://opensource.org/licenses/MIT)`

  } else if (license === 'Apache') {
    return `[${license}](https://opensource.org/licenses/Apache-2.0)`

  } else if (license === 'GNU') {
    return `[${license}](https://www.gnu.org/licenses/gpl-3.0)`

  } else if (license === 'BSD') {
    return `[${license}](https://opensource.org/licenses/BSD-3-Clause)`

  }
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
renderLicenseSection = (license) => {
  if (license === 'None') {
    return ''
  };
  return '# License'
}


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

  ${renderLicenseSection(data.license)}

  ${renderLicenseBadge(data.license)}

  ${renderLicenseLink(data.license)}
  
`;
}

// export this module to use in main module (index.js)
module.exports = generateMarkdown;
