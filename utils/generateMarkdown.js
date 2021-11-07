// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Created a function to generate markdown for README
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

  #Installation
  ${data.installation}

  #usage
  ${data.usage}

  #Contributing
  ${data.contributing}

  #Tests
  ${data.tests}

  #Questions
  If you have any queries or questions in relation to this application please do not hesitate to get in contact with me via ${data.questions}.

  #Credits
  ${data.credits}

  #License
  ${data.license}

`;
}

module.exports = generateMarkdown;
