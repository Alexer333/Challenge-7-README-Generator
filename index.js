// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input

const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
            //Title, description, table of contents, installation, usage, license
            {
                type: "input",
                message: "What is the title?",
                name: "title"
            },
            {
                type: "input",
                message: "What is a description of your project?",
                name: "description"
            },
            {
                type: "input",
                message: "What is the installation process of your project?",
                name: "installation"
            },
            {
                type: "input",
                message: "How does one use your project?",
                name: "usage"
            },
            {
                type: "list", 
                message: "What is the license for your project?",
                name: "license",
                choices: ["MIT", ""]
            }
];

// TODO: Create a function to write README file, which needs to be README.md...
function writeToFile(fileName, data) {
    fs.writeFile("readme.md", data,(err)=>{
        if(err) throw err;
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        //Pass the answers to the big string
        const string = generateMarkdown(answers);
        writeToFile("readme.md", string);
    })
        
}

// Function call to initialize app
init();
