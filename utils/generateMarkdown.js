function generateMarkdown(data) {
    let markdownTemplate =
    `# ${data.title}
 
    ## Description 
    ${data.description} 
    `;

    let tableOfContents = `## **Table of Contents**
    ---`;
    if (data.installation) {
      tableOfContents += `* [Installation](#installation)`
    };
    if (data.instructions) {
      tableOfContents += `* [Usage](#usage)`
    };
    if (data.contribution) {
      tableOfContents += `* [Contribution](#contribution)`
    };
    if (data.testing) {
      tableOfContents += `* [Testing](#testing)`
    };
    if (data.questions) {
      tableOfContents += `* [Questions](#questions)`
    };
  
 
    markdownTemplate += tableOfContents;
    
 
    markdownTemplate +=
      `* [Contact](#contact)`;
    markdownTemplate +=
      `* [License](#license)
      ---`;
    

    
    //installation
    if (data.installation) {
      markdownTemplate +=
        `## Installation
        ---
        _Follow these steps to properly install this application:_
        ${data.installation}`
    };
    
    //usage
    if (data.instructions) {
      markdownTemplate +=
        `## Usage
        ---
        _Instructions for use:_
        ${data.instructions}`
    };
  
    //contributions
    if (data.contribution) {
      markdownTemplate +=
        `## Contribution
        ---
        _If you would like to contribute, please adhere to these guidelines:_
        ${data.contribution}`
    };
  
    //testing
    if (data.testing) {
      markdownTemplate +=
        `## Testing
        ---
        _Instructions for testing application:_
        ${data.testing}`
    };
  
    //questions
    if (data.questions) {
      markdownTemplate +=
        `## Questions
        ---
        _For further questions please follow these steps:_
        ${data.questions}`
    }
  
    //contact
    markdownTemplate +=
      `## Contact
        ---
        _Contact Info:_
        * GitHub: [${data.username}](https://github.com/${data.username})
        * Email: [${data.email}](${data.email})`;
    
    //license
    let licenseOption = `${data.license}`;
    let licenseLink = '';
    //if conditional to give the license the correct link
    if (licenseOption === 'GNU AGPLv3') {
      licenseLink = 'https://choosealicense.com/licenses/agpl-3.0/';
    };
    if (licenseOption === 'GNU GPLv3') {
      licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/';
    };
    if (licenseOption === 'GNU LGPLv3') {
      licenseLink = 'https://choosealicense.com/licenses/lgpl-3.0/';
    };
    if (licenseOption === 'Mozilla Public License 2.0') {
      licenseLink = 'https://choosealicense.com/licenses/mpl-2.0/';
    };
    if (licenseOption === 'Apache License 2.0') {
      licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
    };
    if (licenseOption === 'MIT License') {
      licenseLink = 'https://choosealicense.com/licenses/mit/';
    };
    if (licenseOption === 'Boost Software License 1.0') {
      licenseLink = 'https://choosealicense.com/licenses/bsl-1.0/';
    };
    if (licenseOption === 'The Unlicense') {
      licenseLink = 'https://choosealicense.com/licenses/unlicense/';
    };
  
    markdownTemplate +=
      `## License
        ---
        This application has the ${licenseOption}. 
        For more information please view the [license description](${licenseLink}).`;
    return markdownTemplate;
  }

module.exports = generateMarkdown;
