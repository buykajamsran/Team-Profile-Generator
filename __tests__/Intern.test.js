const Intern = require('../lib/Intern')

test("creates intern object", () => {
    const intern = new Intern("Buyka", 1, "buyka@gmail.com", "Rice");

    expect(intern.name).toBe("Buyka");
    expect(intern.id).toBe(1);
    expect(intern.email).toBe("buyka@gmail.com");
    expect(intern.role).toBe("Intern");
    expect(intern.school).toBe("Rice");
})

test("gets intern's name", () => {
    const intern = new Intern("Buyka", 1, "buyka@gmail.com", "Rice");

    expect(intern.getName()).toHaveProperty('name');
})

test("gets intern's id", () => {
    const intern = new Intern("Buyka", 1, "buyka@gmail.com", "Rice");

    expect(intern.getId()).toHaveProperty('id');
})

test("gets intern's email", () => {
    const intern = new Intern("Buyka", 1, "buyka@gmail.com", "Rice");

    expect(intern.getEmail()).toHaveProperty('email');
})

test("gets intern's github", () => {
    const intern = new Intern("Buyka", 1, "buyka@gmail.com", "Rice");

    expect(intern.getSchool()).toHaveProperty('school');
}) 

test("gets intern's role", () => {
    const intern = new Intern("Buyka", 1, "buyka@gmail.com", "Rice");

    expect(intern.getRole()).toHaveProperty('role');
}) 
