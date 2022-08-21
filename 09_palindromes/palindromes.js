//1. phrase into Array
//2. remove puctuation (slice out)
//3. loop to check = Math.floor (length of Array / 2)
//4.  compare both ends of the Array

const palindromes = function (phrase) {
  let lettersArray = phrase.toLowerCase().split("");
  let modifiedArray = [];
  let modArrayCounter = 0;
  for (i = 0; i < lettersArray.length; i++) {
    if (
      lettersArray[i] === " " ||
      lettersArray[i] === "," ||
      lettersArray[i] === "'" ||
      lettersArray[i] === "." ||
      lettersArray[i] === "!"
    ) {
    } else {
      modifiedArray[modArrayCounter] = lettersArray[i];
      modArrayCounter++;
    }
  }
  let arrayLength = modifiedArray.length;
  for (y = 0; y < Math.floor(arrayLength / 2); y++) {
    if (modifiedArray[y] !== modifiedArray[arrayLength - y - 1]) return false;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
