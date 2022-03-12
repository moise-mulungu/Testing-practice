function stringLength(string) {
    if(string.length < 1 || string.length > 10) {
      throw new Error('the string does not meet the reqs')
    } else {
      return string.length;
    }
  }
  
  function reverseString(string) {
    return string.split('').reverse().join('');
  }
  function capitalize(string) {
    string = string.split('');
    string[0] = string[0].toUpperCase();
    return string.join('');
  }
  module.exports = {
    stringLength,
    reverseString,
    capitalize
  };
