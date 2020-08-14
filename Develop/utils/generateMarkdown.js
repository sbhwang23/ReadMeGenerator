// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  [![License](https://img.shields.io/badge/License-${ badge }.svg)]

  #Table of Contents
  1. [About](#description)
  2. [Installing](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contributing](#contributing)
  6. [Tests](#test)
  7. [Contact Information](#email)

  ## About
  ${data.description}

  ## Installing
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License 
  This project is licensed under the ${data.license} License.

  ## Contributing
  ${data.contributing}

  ## Running the tests
  ${data.test}

  ## Questions
  Github: ${data.github}
  Reach out to ${data.email} with additional questions.
`;
}

module.exports = generateMarkdown;
