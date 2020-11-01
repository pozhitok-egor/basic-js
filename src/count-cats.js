const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.flat().reduce((accumulator, currentValue) => {
    if (currentValue == '^^')
      accumulator++;
    return accumulator;
  }, 0)
};
