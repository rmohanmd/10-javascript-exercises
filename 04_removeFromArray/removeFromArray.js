const removeFromArray = function () {
  let submitArray = arguments[0];
  let arrayLength = submitArray.length;
  let numOfWordsRemove = arguments.length;
  //items to be removed are 1 less than the length of the array.

  for (i = 1; i < numOfWordsRemove; i++) {
    let removalWord = arguments[i];
    for (y = 0; y < arrayLength; y++) {
      if (removalWord === submitArray[y]) {
        submitArray.splice(y, 1);
      }
    }
  }
  return submitArray;
};

// Do not edit below this line
module.exports = removeFromArray;
