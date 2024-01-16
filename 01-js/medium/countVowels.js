/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let lowerStr = str.toLowerCase();
  let vowelsCount = 0;
  for (let i = 0; i < lowerStr.length; i++) {
    if (
      lowerStr[i] === "a" ||
      lowerStr[i] === "e" ||
      lowerStr[i] === "i" ||
      lowerStr[i] === "o" ||
      lowerStr[i] === "u"
    ) {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}

module.exports = countVowels;
