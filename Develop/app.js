const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "main.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
const employees = [];
const employeeInput = [
    {
        type: "input",
        name: "name",
        message: "Enter the first and last name:"
    },
    {
        type: "input",
        name: "id",
        message: "Enter the employee's ID number:"
    },
    {
        type: "input",
        name: "email",
        message: "Enter the employee's email address:"
    }
];

const managerInput = [
    {
        type: "input",
        name: "name",
        message: "Enter the first and last name:"
    },
    {
        type: "input",
        name: "id",
        message: "Enter the employee's ID number:"
    },
    {
        type: "input",
        name: "email",
        message: "Enter the employee's email address:"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Enter the manager's office number:"
    }
];

const engineerInput = [
    {
        type: "input",
        name: "name",
        message: "Enter the first and last name:"
    },
    {
        type: "input",
        name: "id",
        message: "Enter the employee's ID number:"
    },
    {
        type: "input",
        name: "email",
        message: "Enter the employee's email address:"
    },
    {
        type: "input",
        name: "github",
        message: "Enter the Engineers GitHub username:"
    }
];

// and to create objects for each team member (using the correct classes as blueprints!)
const addEmployee = () => {
    inquirer.prompt([
        {
            type: "confirm",
            name: "add",
            message: "Would you like to add an employee?"
        }
    ]).then(function (confirm) {
        if (confirm.add == true) {
            addRole();
        }
        else {
            const html = render(employees);
            fs.writeFile(outputPath, html, (err) =>
                err ? console.log(err) : console.log('Added Employee(s)'));
        }

    });
}


const addRole = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Choose the employee's role: ",
            choices: ["Engineer", "Manager", "Intern"]
        }
    ]).then(function (roleResponse) {
        if (roleResponse.role === 'Manager') {
            inquirer.prompt(managerInput).then((response) => {
                const newManager = new Manager(response.name, response.id, response.email, response.officenumber);
                employees.push(newManager);
                console.log(employees);
                addEmployee();

    else (response.role === 'Engineer') {
    const newEngineer = new Engineer(response.name, response.id, response.email, response.github);
    employees.push(newEngineer);
    console.log(employees);
}
            



const createObjects = () => {
    if (response.role === 'Manager') {
        inquirer.prompt(employeeInput).then((response) => {
            console.log(response);
            const newManager = new Manager(response.name, response.id, response.email, response.officenumber);
            employees.push(newManager);
            console.log(employees);
            addEmployee();
        }

            else if (response.role === 'Engineer') {
        const newEngineer = new Engineer(response.name, response.id, response.email, response.github);
        employees.push(newEngineer);
        console.log(employees);
    }

    else if (response.role === 'Intern') {
        const newIntern = new Intern(response.name, response.id, response.email, response.role, response.school);
        employees.push(newIntern);
        console.log(employees);
    }
                )

    }
}
addEmployee();


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
