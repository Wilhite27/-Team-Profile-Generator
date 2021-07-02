const Intern = require('../lib/Intern');

test('can instantiate employee instance', () => {
    const intern = new Intern();
    expect(typeof(intern)).toBe("object");
    })