const Manager = require('../lib/Manager');


test('checks to see if Manager name is truthy', () => {
    const manager = new Manager('Durrelle');

    expect(manager.name).toBe('Durrelle');
})
test('can get the manager id number', () => {
    const managerId = 150;
    const manager = new Manager('Wilhite', managerId);

    expect(manager.id).toBe(managerId);
})
test('can instantiate employee instance', () => {
    const manager = new Manager();
    expect(typeof(manager)).toBe("object");
    })