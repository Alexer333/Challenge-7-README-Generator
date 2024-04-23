// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === null){
      return ``;
    } else {
      return `[license]()`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// Make sure to check markdown cheatsheet to know how do markdown formatting stuff.
function renderLicenseSection(license) {
  if(license === null){
    return ``;
  } else {
    return `
    ## License
    This project is licensed with ${license}`
  }
}

// TODO: Create a function to generate markdown for README. Basically the whole structure for it!!!
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  * [Installation](#installation) 
  * [Usage](#usage)
  * [License](#license)

  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
