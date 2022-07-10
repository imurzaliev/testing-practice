const reverseString = require('../scripts/reverseString');

test('word to be drow', () => {
  expect(reverseString('word')).toBe('drow');
});

test('"1234" to be drow', () => {
  expect(reverseString('1234')).toBe('4321');
});

test('1234 to be "string expected"', () => {
  expect(reverseString(1234)).toBe('string expected');
});

test('"" to be "string expected"', () => {
  expect(reverseString('')).toBe('string expected');
});

// test('"foo 𝌆 bar mañana mañana" to be "anañam anañam rab 𝌆 oof"', () => {
//   expect(reverseString('foo 𝌆 bar mañana mañana')).toBe(
//     'anañam anañam rab 𝌆 oof'
//   );
// });
