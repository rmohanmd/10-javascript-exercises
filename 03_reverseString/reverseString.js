const reverseString = function (phrase) {
  let reversePhrase = "";
  let splitPhrase = phrase.split("");
  for (i = 0; i < splitPhrase.length; i++) {
    reversePhrase += splitPhrase[splitPhrase.length - (i + 1)];
  }
  return reversePhrase;
};

// Do not edit below this line
module.exports = reverseString;
