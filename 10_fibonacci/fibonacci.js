//sum of two preceding numbers
// create a fibonnaci calculating function

const fibonacci = function (num) {
  if (num < 1) {
    return "OPPS";
  }
  let a = 1;
  let b = 0;
  let temp = 0;

  if (num === 1 || num === 2) {
    return 1;
  } else {
    for (i = 0; i < num; i++) {
      temp = a + b;
      a = b;
      b = temp;
    }
  }
  return temp;
};

// Do not edit below this line
module.exports = fibonacci;
