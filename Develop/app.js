const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// Add Team Member
const addTeamMember = () => {
    inquirer
    .prompt([
        {
            type: 'checkbox',
            message: 'Which team member would you like to add next? ',
            choices: ['Manager', 'Engineer', 'Intern', 'Done building team'],
            name: 'addTeamInput',
        },
    ])
        .then((response) => {
            if(response.addTeamInput == 'Manager') {
                // call manager inquirer function
                inquireManager();
            } else if (response.addTeamInput == 'Engineer') {
                // call engineer inquirer function
                inquireEngineer();
            } else if (response.addTeamInput == 'Intern') {
                // call intern inquirer function
                inquireIntern();
            } else {
                // call render function
                // render();
            }
});
}

addTeamMember();

// Gather Manager Information
const manager = []

const inquireManager = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter Manager Name: ',
            name: 'managerName',
        },
        {
            type: 'number',
            message: 'Enter Manager ID: ',
            name: 'managerId',
        },
        {
            type: 'input',
            message: 'Enter Manager Email: ',
            name: 'managerEmail',
        },
        {
            type: 'number',
            message: 'Enter Manager Office Number: ',
            name: 'managerOffice',
        },
    ])
        .then((response) => {
            manager.push(response);
            console.log(manager);
            addTeamMember();
});
}

// Gather Engineer Information

const engineer = []

const inquireEngineer = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter Engineer Name: ',
            name: 'engineerName',
        },
        {
            type: 'number',
            message: 'Enter Engineer ID: ',
            name: 'engineerId',
        },
        {
            type: 'input',
            message: 'Enter Engineer Email: ',
            name: 'engineerEmail',
        },
        {
            type: 'input',
            message: 'Enter Engineer GitHub Username: ',
            name: 'engineerGithub',
        },
    ])
        .then((response) => {
            engineer.push(response);
            console.log(engineer);
            addTeamMember();
});
}

// Gather Intern Information
const intern = []

const inquireIntern = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter Intern Name: ',
            name: 'internName',
        },
        {
            type: 'number',
            message: 'Enter Intern ID: ',
            name: 'internId',
        },
        {
            type: 'input',
            message: 'Enter Intern Email: ',
            name: 'internEmail',
        },
        {
            type: 'input',
            message: 'Enter Intern School: ',
            name: 'internSchool',
        },
    ])
        .then((response) => {
            intern.push(response);
            console.log(intern);
            addTeamMember();
});
}
       

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
