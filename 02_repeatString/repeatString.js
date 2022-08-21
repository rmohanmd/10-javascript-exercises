const repeatString = function (string, num) {
  let concatString = "";
  if (num >= 0) {
    concatString = "";
    for (i = 0; i < num; i++) {
      concatString += string;
    }
    return concatString;
  }
  return (concatString = "ERROR");
};

// Do not edit below this line
module.exports = repeatString;
