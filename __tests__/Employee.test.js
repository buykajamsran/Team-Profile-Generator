const Employee = require('../lib/Employee');

test("creates an employee object", () => {
    const employee = new Employee("Buyka", 1, "buyka@gmail.com", "employee");

    expect(employee.name).toBe("Buyka");
    expect(employee.id).toBe("1");
    expect(employee.email).toBe("buyka@gmail.com"); 
    expect(employee.role).toBe('employee');
});

test("gets employee's name", () => {
    const employee = new Employee("Buyka", 1, "buyka@gmail.com", "employee");

    expect(employee.getName()).toHaveProperty("name");
});

test("gets employee's id", () => {
    const employee = new Employee("Buyka", 1, "buyka@gmail.com", "employee");

    expect(employee.getId()).toHaveProperty("id");
});

test("gets employee's email", () => {
    const employee = new Employee("Buyka", 1, "buyka@gmail.com", "employee");

    expect(employee.getEmail()).toHaveProperty("email");
});

test("gets employee's role as an object", () => {
    const employee = new Employee("Buyka", 1, "buyka@gmail.com", "employee");

    expect(employee.getRole()).toHaveProperty("role");
});

// // WHEN I am prompted for my team members and their information
// // THEN an HTML file is generated that displays a nicely formatted team roster based on user input

// // WHEN I click on an email address in the HTML
// // THEN my default email program opens and populates the TO field of the email with the address

// // WHEN I click on the GitHub username
// // THEN that GitHub profile opens in a new tab

// // WHEN I start the application
// // THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// name = getName()
// id = getId()
// email = getEmail()
// officeNumber = getOfficeNumber()
// // WHEN I enter the team manager’s name, employee ID, email address, and office number
// // THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// role = getRole()
// // WHEN I select the engineer option
// // THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// github = getGithub()
// // WHEN I select the intern option
// // THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// school = getSchool()
// // WHEN I decide to finish building my team
// // THEN I exit the application, and the HTML is generated