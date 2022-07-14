const analizeArray = function (arr) {
  if (!isValid(arr)) {
    return 'not an array';
  } else {
    const sum = arr.reduce((a, b) => a + b, 0);
    const length = arr.length;
    const average = Math.round(sum / length);
    const min = arr.reduce((a, b) => Math.min(a, b));
    const max = arr.reduce((a, b) => Math.max(a, b));
    const analized = {
      average,
      min,
      max,
      length,
    };
    return analized;
  }
};

const isValid = (arr) => {
  if (Array.isArray(arr)) {
    for (let item of arr) {
      if (typeof item !== 'number') {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

module.exports = analizeArray;
