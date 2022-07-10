const capitalize = (str) => {
  if (!str.length || typeof str != 'string') {
    return 'string expected';
  } else if (!getLettersOnly(str).length) {
    return 'no valid characters';
  } else {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
};

const getLettersOnly = (str) => {
  const newStr = str.replace(/[^A-Za-z]+/g, '');
  return newStr;
};

module.exports = capitalize;
