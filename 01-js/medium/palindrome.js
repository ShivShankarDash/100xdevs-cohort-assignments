/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let lowerStr = str.toLowerCase();
  let punctuateStr = lowerStr.replace(/[^\w\s]|_/g, "");
  let resultStr = punctuateStr.replace(/\s/g, "");
  let j = resultStr.length - 1;
  for (let i = 0; i < Math.floor(resultStr.length / 2); i++) {
    if (resultStr[i] != resultStr[j]) {
      return false;
    }
    j--;
  }

  return true;
}

module.exports = isPalindrome;
