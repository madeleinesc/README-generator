// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
renderLicenseBadge = (license) => {
  if (license == 'None') {
    return '';

  } else if (license === 'MIT') {
    return '![License](https://img.shields.io/badge/License-MIT-9cf)' // license badge image

  } else if (license === 'Apache') {
    return '![License](https://img.shields.io/badge/License-Apache-ff69b4)' // license badge image

  } else if (license === 'GNU') {
    return '![License](https://img.shields.io/badge/License-GNU-yellow)' // license badge image

  } else if (license === 'BSD') {
    return '![License](https://img.shields.io/badge/License-BSD-green)' // license badge image

  }
}



// function that returns the license link
// If there is no license, return an empty string
renderLicenseLink = (license) => {
  if (license == 'None') {
    return ``;

  } else if (license === 'MIT') {
    return `[${license}](https://opensource.org/licenses/MIT)` // open source license webpage 

  } else if (license === 'Apache') {
    return `[${license}](https://opensource.org/licenses/Apache-2.0)` // open source license webpage

  } else if (license === 'GNU') {
    return `[${license}](https://www.gnu.org/licenses/gpl-3.0)` // open source license webpage 

  } else if (license === 'BSD') {
    return `[${license}](https://opensource.org/licenses/BSD-3-Clause)` // open source license webpage

  }
}



// function that returns the license section of README
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

  ${renderLicenseSection(data.license)}

  ${renderLicenseBadge(data.license)}

  ${renderLicenseLink(data.license)}

  # Description
  ${data.description}

  # Table of Contents:
  - [License](#license)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [Credits](#credits)
  
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

`;
}

// export this module to use in main module (index.js)
module.exports = generateMarkdown;
