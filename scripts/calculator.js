const validity = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return false;
  } else {
    return true;
  }
};

const add = (a, b) => {
  if (validity(a, b)) {
    return a + b;
  }
  return 'Arguments contains a non-number';
};

const subtract = (a, b) => {
  if (validity(a, b)) {
    return a - b;
  }
  return 'Arguments contains a non-number';
};

const divide = (a, b) => {
  if (validity(a, b)) {
    if (b === 0) {
      return 'cant divide by 0';
    }
    return a / b;
  }
  return 'Arguments contains a non-number';
};

const multiply = (a, b) => {
  if (validity(a, b)) {
    return a * b;
  }
  return 'Arguments contains a non-number';
};

const calculator = {
  add,
  subtract,
  divide,
  multiply,
};

module.exports = calculator;
