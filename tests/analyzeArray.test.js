const analizeArray = require('../scripts/analyzeArray');

test('number array', () => {
  expect(analizeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('list of numbers', () => {
  expect(analizeArray(1, 8, 3, 4, 2, 6)).toBe('not an array');
});

test('string', () => {
  expect(analizeArray('183426')).toBe('not an array');
});

test('array with non-number', () => {
  expect(analizeArray([1, 8, 3, 4, 2, '6'])).toBe('not an array');
});
