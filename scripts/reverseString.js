const reverseString = (str) => {
  if (!str.length || typeof str != 'string') {
    return 'string expected';
  } else {
    return [...str].reverse().join('');
  }
};

module.exports = reverseString;
