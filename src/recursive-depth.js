const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return Array.isArray(arr) ? 1 + arr.reduce((accumulator, currentValue) => {return Math.max(accumulator, this.calculateDepth(currentValue))}, 0) : 0;
  }
};