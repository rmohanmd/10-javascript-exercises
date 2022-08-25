const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = (givenArray) => {
  return givenArray.reduce((tots, numb) => {
    return (tots += numb);
  }, 0);
};

const multiply = function (givenArray) {
  let total = 1;
  for (i = 0; i < givenArray.length; i++) {
    total = total * givenArray[i];
  }
  return total;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  total = 1;
  for (i = 1; i <= num; i++) {
    total = total * i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
