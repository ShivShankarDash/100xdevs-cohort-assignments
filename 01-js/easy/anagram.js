/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const lowerStr1 = str1.toLowerCase();
  const lowerStr2 = str2.toLowerCase();

  if (lowerStr1.length !== lowerStr2.length) {
    return false;
  }

  const charArray1 = new Array(256).fill(0);
  const charArray2 = new Array(256).fill(0);

  for (let i = 0; i < lowerStr1.length; i++) {
    charArray1[lowerStr1.charCodeAt(i)]++;
    charArray2[lowerStr2.charCodeAt(i)]++;
  }

  for (let i = 0; i < charArray1.length; i++) {
    if (charArray1[i] !== charArray2[i]) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
