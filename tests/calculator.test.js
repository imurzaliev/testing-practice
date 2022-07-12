const calculator = require('../scripts/calculator');

test('add(2,3) to be 5', () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test('add(-2,1) to be -1', () => {
  expect(calculator.add(-2, 1)).toBe(-1);
});

test('add("2",3) to be "Arguments contains a non-number"', () => {
  expect(calculator.add('2', 3)).toBe('Arguments contains a non-number');
});

test('add(0.2,3) to be 3.2', () => {
  expect(calculator.add(0.2, 3)).toBe(3.2);
});

test('subtract(5,3) to be 2', () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});

test('subtract("2",3) to be "Arguments contains a non-number"', () => {
  expect(calculator.subtract('2', 3)).toBe('Arguments contains a non-number');
});

test('divide(5,2) to be 2.5', () => {
  expect(calculator.divide(5, 2)).toBe(2.5);
});

test('divide(5,0) to be "cant divide by 0"', () => {
  expect(calculator.divide(5, 0)).toBe('cant divide by 0');
});

test('subtract("2",3) to be "Arguments contains a non-number"', () => {
  expect(calculator.divide('2', 3)).toBe('Arguments contains a non-number');
});

test('multiply(5,2) to be 2.5', () => {
  expect(calculator.multiply(5, 2)).toBe(10);
});

test('multiply(5,0) to be 0', () => {
  expect(calculator.multiply(5, 0)).toBe(0);
});

test('multiply(0,2) to be 0', () => {
  expect(calculator.multiply(0, 2)).toBe(0);
});

test('multiply("2",3) to be "Arguments contains a non-number"', () => {
  expect(calculator.multiply('2', 3)).toBe('Arguments contains a non-number');
});
