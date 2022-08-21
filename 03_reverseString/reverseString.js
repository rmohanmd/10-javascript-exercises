const reverseString = function (phrase) {
  let reversePhrase = "";
  let splitPhrase = phrase.split("");
  for (i = 0; i < splitPhrase.length; i++) {
    reversePhrase += splitPhrase[splitPhrase.length - (i + 1)];
  }
  return reversePhrase;
};

// there is a .reverse and .join function thus could use return string.split('').reverse().join('');

// Do not edit below this line
module.exports = reverseString;
