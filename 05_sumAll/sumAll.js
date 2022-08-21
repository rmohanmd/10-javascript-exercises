const sumAll = function (startNum, endNum) {
  let total = 0;

  if (
    startNum < 0 ||
    endNum < 0 ||
    typeof startNum !== "number" ||
    typeof endNum !== "number"
  ) {
    return "ERROR";
  }

  if (startNum > endNum) {
    let temp = endNum;
    endNum = startNum;
    startNum = temp;
  }

  for (i = startNum; i < endNum + 1; i++) {
    total += i;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
