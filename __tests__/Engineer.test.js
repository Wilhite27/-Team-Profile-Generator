const Engineer = require('../lib/Engineer');
jest.mock('../lib/Intern');


test('checks to see if Engineer name is truthy', () => {
    const engineer = new Engineer('Durrelle');

    expect(engineer.name).toBe('Durrelle');
})
test('checks to see if Engineer Github is truthy', () => {
    const engineer = new Engineer('Durrelle');

    expect(engineer.github).toBe('Wilhite27');
})


test('can get the engineer email address', () => {
    const engineer = new Engineer('Durrelle',  100,'Wislhitedurrelle@gmail.com', 'Wilhite27');

    expect(engineer.email).toBe(String);
})
test('can get the engineer id number', () => {
    const engineerId = 100;
    const engineer = new Engineer('Wilhite', engineerId);

    expect(engineer.id).toBe(engineerId);
})

