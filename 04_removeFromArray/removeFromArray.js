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

//My solution using arguments[n] is not ES6 compatible. Also, arguments[n] is 'array-like' but not an array
//you can use length property and get it's contents. But you can't use array built in methods like forEach
//or arrow functions

//...args is rest parameters

const removeFromArraySample = function (...args) {
  // the very first item in our list of arguments is the array, we pull it out with args[0]
  const array = args[0];
  // create a new empty array
  const newArray = [];
  // use forEach to go through the array
  array.forEach((item) => {
    // push every element into the new array
    // UNLESS it is included in the function arguments
    // so we create a new array with every item, except those that should be removed
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  // and return that array
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
