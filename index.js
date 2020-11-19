const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
    inquirer.prompt([{
            type: 'input',
            name: 'ProjectTitle',
            message: 'What is your Project Title',
        },
        {
            type: 'input',
            name: 'GitHubName',
            message: 'What is your GitHub Name?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Please provide a project description.',
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'What are the installation instructions?',
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Please enter Usage information.',
        },
        {
            type: 'list',
            name: 'License',
            message: 'Please select all Licenses that apply.',
            choices: ["WordPress",
                "Rust",
                "NPM packages",
                "Apache"
            ]
        },
        {
            type: 'input',
            name: 'Contributing',
            message: 'Please enter your Contributors.',
        },
        {
            type: 'input',
            name: 'Test',
            message: 'Please enter you test instructions.',
        },

    ]);

const generateReadme = (answers) =>
    `# ${answers.ProjectTitle}

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)

## Description 

${answers.Description}

## Installation

${answers.Installation}

## Usage 

${answers.Usage}

## Contributing

${answers.Contributing}

## License

${answers.License}


## Video

<iframe src="https://drive.google.com/file/d/1bHhB3_H7QURDLlm1Ngj3mvzar4BuCeqv/preview" width="640" height="480"></iframe>

[![alt text](./assets/youtube.png)](https://youtu.be/f7b-rYEUh4c "ReadMe Generator")

## Badges


## Contributing

${answers.Contributing}

## Tests

${answers.Test}

## Questions

* GitHub Repo https://github.com/${answers.GitHubName}

You can reach me by emailing me at ${answers.email} with any additional questions.

## Screenshots

* Getting Started
![Getting Started](./assets/screenshot01.png)

* Answer Questions
![Answer Questions](./assets/screenshot02.png)

* Preview ReadMe File
![Preview ReadMe File](./assets/screenshot03.png)

---
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
`;

promptUser()
    .then((answers) => writeFileAsync('README.md', generateReadme(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));