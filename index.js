// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input

const generateMarkdown = require('./utils/generateMarkdown');

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
                message: "What is the table of contents of your project?",
                name: ""
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
