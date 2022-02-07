const Engineer = require('../lib/Engineer')

test("creates manager object", () => {
    const engineer = new Engineer("Buyka", 1, "buyka@gmail.com", "buykajamsran");

    expect(engineer.name).toBe("Buyka");
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe("buyka@gmail.com");
    expect(engineer.role).toBe("Engineer");
    expect(engineer.github).toBe("buykajamsran");
})

test("gets engineer's name", () => {
    const engineer = new Engineer("Buyka", 1, "buyka@gmail.com", "buykajamsran");

    expect(engineer.getName()).toHaveProperty('name');
})

test("gets engineer's id", () => {
    const engineer = new Engineer("Buyka", 1, "buyka@gmail.com", "buykajamsran");

    expect(engineer.getId()).toHaveProperty('id');
})

test("gets engineer's email", () => {
    const engineer = new Engineer("Buyka", 1, "buyka@gmail.com", "buykajamsran");

    expect(engineer.getEmail()).toHaveProperty('email');
})

test("gets engineer's github", () => {
    const engineer = new Engineer("Buyka", 1, "buyka@gmail.com", "buykajamsran");

    expect(engineer.getGithub()).toHaveProperty('github');
}) 

test("gets engineer's role", () => {
    const engineer = new Engineer("Buyka", 1, "buyka@gmail.com", "buykajamsran");

    expect(engineer.getRole()).toHaveProperty('role');
}) 
