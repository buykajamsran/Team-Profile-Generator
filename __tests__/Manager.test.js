const Manager = require('../lib/Manager')

test("creates manager object", () => {
    const manager = new Manager("Buyka", 1, "buyka@gmail.com", 2);

    expect(manager.name).toBe("Buyka");
    expect(manager.id).toBe(1);
    expect(manager.email).toBe("buyka@gmail.com");
    expect(manager.role).toBe("Manager");
    expect(manager.officeNumber).toBe(2);
})

test("gets manager's name", () => {
    const manager = new Manager("Buyka", 1, "buyka@gmail.com", 2);

    expect(manager.getName()).toHaveProperty('name');
})

test("gets manager's id", () => {
    const manager = new Manager("Buyka", 1, "buyka@gmail.com", 2);

    expect(manager.getId()).toHaveProperty('id');
})

test("gets manager's email", () => {
    const manager = new Manager("Buyka", 1, "buyka@gmail.com", 2);

    expect(manager.getEmail()).toHaveProperty('email');
})

test("gets manager's office number", () => {
    const manager = new Manager("Buyka", 1, "buyka@gmail.com", 2);

    expect(manager.getOfficeNumber()).toHaveProperty('officeNumber');
}) 

test("gets manager's role", () => {
    const manager = new Manager("Buyka", 1, "buyka@gmail.com", 2);

    expect(manager.getRole()).toHaveProperty('role');
}) 
