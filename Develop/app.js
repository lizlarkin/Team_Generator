const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");                                        

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");

// Employees Array
const employees = []

// Add Team Member
const addTeamMember = () => {
    inquirer
    .prompt([
        {
            type: 'checkbox',
            message: 'Which team member would you like to add? ',
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
                if(!fs.existsSync(OUTPUT_DIR)){
                    fs.mkdirSync(OUTPUT_DIR)
                }
                
                fs.writeFileSync(outputPath, render(employees), "utf-8");
            }
});
}

addTeamMember();

// Gather Manager Information

const inquireManager = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter Manager Name: ',
            name: 'name',
        },
        {
            type: 'number',
            message: 'Enter Manager ID: ',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Enter Manager Email: ',
            name: 'email',
        },
        {
            type: 'number',
            message: 'Enter Manager Office Number: ',
            name: 'officeNumber',
        },
    ])
        .then((response) => {
            const addManager = new Manager(
                response.name, 
                response.id, 
                response.email, 
                response.officeNumber);
            employees.push(addManager);   
            addTeamMember();
});
}

// Gather Engineer Information

const inquireEngineer = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter Engineer Name: ',
            name: 'name',
        },
        {
            type: 'number',
            message: 'Enter Engineer ID: ',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Enter Engineer Email: ',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Enter Engineer GitHub Username: ',
            name: 'github',
        },
    ])
        .then((response) => {
            const addEngineer = new Engineer(
                response.name, 
                response.id, 
                response.email, 
                response.github);
            employees.push(addEngineer);   
            addTeamMember();
});
}

// Gather Intern Information

const inquireIntern = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter Intern Name: ',
            name: 'name',
        },
        {
            type: 'number',
            message: 'Enter Intern ID: ',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Enter Intern Email: ',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Enter Intern School: ',
            name: 'school',
        },
    ])
    .then((response) => {
        const addIntern = new Intern(
            response.name, 
            response.id, 
            response.email, 
            response.school);
        employees.push(addIntern);   
        addTeamMember();
});
}
