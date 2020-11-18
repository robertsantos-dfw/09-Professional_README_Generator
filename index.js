const inquirer = require('inquirer');
const fs = require('fs');
// const util = require('util');

const promptUser = () =>
    inquirer.prompt([{
            type: 'input',
            name: 'ProjectTitle',
            message: 'What is your Project Title',
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Please provide a project description.',
        },
        {
            type: 'input',
            name: 'TableofContents',
            message: 'What is your favorite hobby?',
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'What are the installation instructions?',
        },
        {
            type: 'input',
            name: 'Usuage',
            message: 'Please enter Usage information.',
        },
        {
            type: 'checkbox',
            name: 'License',
            message: 'Please select all Licenses that apply.',
            choices: ["Business Certificates",
                "Health Care Certificates",
                "Technology Certificates",
                "Criminal Justice Certificates",
                "Arts and Design Certificates",
                "Education Certificates",
                "Skilled Trade Certificates",
                "Legal Certificates"
            ]
        },
        {
            type: 'input',
            name: 'Contributing',
            message: 'Enter your LinkedIn URL.',
        },
        {
            type: 'input',
            name: 'Test',
            message: 'Enter your LinkedIn URL.',
        },
        {
            type: 'input',
            name: 'Questions',
            message: 'Enter your LinkedIn URL.',
        },
    ]);

const generateReadme = (answers) =>
    ` ##README goes here
`;

promptUser()
    .then((answers) => writeFileAsync('README.md', generateReadme(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));