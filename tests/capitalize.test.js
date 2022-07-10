const capitalize = require('../scripts/capitalize');

test('word to be Word', () => {
  expect(capitalize('word')).toBe('Word');
});

test('"multiple words tests" to be "Multiple words tests"', () => {
  expect(capitalize('multiple words tests')).toBe('Multiple words tests');
});

test('1234 to be "string expected"', () => {
  expect(capitalize(1234)).toBe('string expected');
});

test('"" to be "string expected"', () => {
  expect(capitalize('')).toBe('string expected');
});

test('"1234" to be "no valid characters"', () => {
  expect(capitalize('1234')).toBe('no valid characters');
});

test('"#@*" to be "no valid characters"', () => {
  expect(capitalize('#@*')).toBe('no valid characters');
});
