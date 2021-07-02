const Engineer = require('../lib/Engineer');
jest.mock('../lib/Intern');
console.log(new Engineer);

const Engineer = require('../lib/Engineer');

test('checks to see if Engineer name is truthy', () => {
    const engineer = new Engineer ('Durrelle');
const expectedOfficeNumber = 10;

    expect(engineer.name).toBe('Durrelle');
    expect(engineer.email).toBe(expect.any(String));
    expect(engineer.id).toStrictEqual(expect.any(Number));
    expect(engineer.officeNumber).toBe(expectedOfficeNumber);
    expect(engineer.age).toBe(expect.any(Number));
})

