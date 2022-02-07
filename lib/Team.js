const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

class Team {
    constructor() {
        this.employees = [];
        this.manager;
        this.engineer;
        this.intern;
    };

    initTeam() { // Initialize Team
        inquirer.prompt([
                    {
                        type: 'text',
                        name: 'name',
                        message: 'Enter name (required)',
                        validate: nameInput => {
                            if (nameInput) {
                                return true;
                            } else {
                                console.log('Name is required');
                                return false;
                            }
                        }
                    },
                    {
                        type: 'text',
                        name: 'id',
                        message: 'Enter employee ID (required)',
                        validate: idInput => {
                            if (idInput) {
                                return true;
                            } else {
                                console.log('Employee ID required');
                                return false;
                            }
                        }
                    },
                    {
                        type: 'text',
                        name: 'email',
                        message: 'Enter email address (required)',
                        validate: emailInput => {
                            if (emailInput) {
                                return true;
                            } else {
                                console.log('Email address required');
                                return false;
                            }
                        }
                    },
                    {
                        type: 'text',
                        name: 'officeNumber',
                        message: 'Enter office number (required)',
                        validate: officeInput => {
                            if (officeInput) {
                                return true;
                            } else {
                                console.log('Office number required');
                                return false;
                            }
                        }
                    }
                ])
            .then((managerInput) => {
                this.manager = new Manager(managerInput.name, managerInput.id, managerInput.email, managerInput.officeNumber);
                
                let employeeName = this.manager.getName().name;
                let employeeId = this.manager.getId().id;
                let employeeEmail = this.manager.getEmail().email;
                let employeeOfficeNumber = this.manager.getOfficeNumber().officeNumber;
                let employeeRole = this.manager.getRole().role;

                let employee = {
                    name: employeeName,
                    id: employeeId,
                    email: employeeEmail,
                    role: employeeRole,
                    officeNumber: employeeOfficeNumber
                }

                this.employees.push(employee);
                this.AddMoreEmployees();
            })
    }

    async AddMoreEmployees() {
        const addEmployee = await inquirer
            .prompt({
                type: 'list',
                message: 'Add another employee, if any',
                name: 'addEmployee',
                choices: ['Add Engineer', 'Add Intern', 'None']
            })

        if (Object.values(addEmployee)[0] === 'Add Engineer') {
            await this.addEngineer();
        } else if (Object.values(addEmployee)[0] === 'Add Intern') {
            await this.addIntern();
        } else {
            const employeeInput = this.employees
            console.log(employeeInput);
        }
    }

    async addEngineer() {
        const engineerInput = await inquirer
            .prompt([
                {
                    type: 'text',
                    name: 'name',
                    message: "Enter engineer's name (required)",
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log("Engineer's name required");
                            return false;
                        }
                    }
                },
                {
                    type: 'text',
                    name: 'id',
                    message: "Enter engineer's ID (required)",
                    validate: idInput => {
                        if (idInput) {
                            return true;
                        } else {
                            console.log("Engineer's ID required");
                            return false;
                        }
                    }
                },
                {
                    type: 'text',
                    name: 'email',
                    message: "Enter engineer's email address (required)",
                    validate: emailInput => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log("Engineer's email address required");
                            return false;
                        }
                    }
                },
                {
                    type: 'text',
                    name: 'github',
                    message: "Enter engineer's GitHub username (required)",
                    validate: githubInput => {
                        if (githubInput) {
                            return true;
                        } else {
                            console.log("Engineer's GitHub username required");
                            return false;
                        }
                    }
                }
            ])

        this.engineer = new Engineer(engineerInput.name, engineerInput.id, engineerInput.email, engineerInput.github);

        let employeeName = this.engineer.getName().name;
        let employeeId = this.engineer.getId().id;
        let employeeEmail = this.engineer.getEmail().email;
        let employeeRole = this.engineer.getRole().role;
        let employeeGithub = this.engineer.getGithub().github;

        let employee = {
            name: employeeName,
            id: employeeId,
            email: employeeEmail,
            role: employeeRole,
            github: employeeGithub
        }

        this.employees.push(employee);

        return this.AddMoreEmployees();
    }

    async addIntern() {
        const internInput = await inquirer
            .prompt([
                {
                    type: 'text',
                    name: 'name',
                    message: "Enter intern's name (required)",
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log("Intern's name required");
                            return false;
                        }
                    }
                },
                {
                    type: 'text',
                    name: 'id',
                    message: "Enter intern's ID (required)",
                    validate: idInput => {
                        if (idInput) {
                            return true;
                        } else {
                            console.log("Intern's ID required");
                            return false;
                        }
                    }
                },
                {
                    type: 'text',
                    name: 'email',
                    message: "Enter intern's email address (required)",
                    validate: emailInput => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log("Intern's email address required");
                            return false;
                        }
                    }
                },
                {
                    type: 'text',
                    name: 'school',
                    message: "Enter intern's school (required)",
                    validate: schoolInput => {
                        if (schoolInput) {
                            return true;
                        } else {
                            console.log("Intern's school required");
                            return false;
                        }
                    }
                }
            ])
        this.intern = new Intern(internInput.name, internInput.id, internInput.email, internInput.school);
        let employeeName = this.intern.getName().name;
        let employeeId = this.intern.getId().id;
        let employeeEmail = this.intern.getEmail().email;
        let employeeRole = this.intern.getRole().role;
        let employeeSchool = this.intern.getSchool().school;

        let employee = {
            name: employeeName,
            id: employeeId,
            email: employeeEmail,
            role: employeeRole,
            school: employeeSchool
        }

        this.employees.push(employee);

        return this.AddMoreEmployees();

    }
}
module.exports = Team; 