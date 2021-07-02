const Employee = require('../lib/Employee');


    // test('creates a new employee object', () => {
    //     expect(employee.name).toBe(('Durrelle'));
        
    // })

test('can instantiate employee instance', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
    })
test('can get the employee name', () => {
    const employeeName = "Durrelle"
    const employee = new Employee(employeeName);
    
    expect(employee.name).toBe(employeeName);
})
test('can get the employee id number', () => {
    const employeeId = 100;
    const employee = new Employee('Wilhite', employeeId);
    
    expect(employee.id).toBe(employeeId);
    
})
test("Can instantiate Employee instance", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
  });



