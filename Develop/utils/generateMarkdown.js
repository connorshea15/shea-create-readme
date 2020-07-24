// function to generate markdown for README
function generateMarkdown(data) {
  // Destructure the object
  const { github, email, project, description, license, dependencies, tests } = data;
  // console.log(data);
  return github;
  //return `# ${data.title}

// `;
}

module.exports = generateMarkdown;
