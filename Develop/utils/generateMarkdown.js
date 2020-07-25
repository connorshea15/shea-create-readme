// function to print languages
const generateBuiltWith = selectedLanguages => {
  if (selectedLanguages.length === 0) {
    return '';
  } else{
    return `
    ## Built With

    ${selectedLanguages.map(x => {
      return "\n * " + x;
    })}
    `}
};

// function to generate markdown for README
function generateMarkdown(data) {
  // Destructure the object
  const { github, email, project, description, languages, license, dependencies, usage, contributing, tests } = data;
  return `
  # ${project}

  ![](https://img.shields.io/badge/license-${license}-green)

  ## Description 
  ${description}

  ${generateBuiltWith(languages)}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)

  ## Installation
  
  To install necessary dependencies, run the following command:
  
  ${dependencies}

  ## Usage

  ${usage}

  ## License

  This project is licensed under the ${license} license.

  ## Contributing

  ${contributing}

  ## Tests

  To run tests, run the following command:

  ${tests}
  
  ## Questions

  Refer to this GitHub repository here:

  https://github.com/${github}/${project}

  You can reach me with any questions via email at:

  ${email}
  `;
}

module.exports = generateMarkdown;


/* ## Built With

${languages.map(x => {
  return "\n * " + x;
})} */