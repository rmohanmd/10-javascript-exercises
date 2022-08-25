const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (givenArray) {
  return givenArray.reduce((tots, numb) => (tots += numb), 0);
};

const multiply = function (givenArray) {
  return givenArray.reduce((tots, numb) => (tots *= numb), 1);
};
const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  total = 1;
  for (i = 1; i <= num; i++) {
    total *= i;
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
