const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw 'Error';
    let array = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "--discard-next") {
        i++;
      } else if (arr[i] === "--discard-prev") {
        if (array.length != 0 && arr[i - 2] != '--discard-next') array.pop();
      } else if (arr[i] === "--double-next") {
        if (i < arr.length - 1) array.push(arr[i + 1]);
      } else if (arr[i] === "--double-prev") {
        if (i >= 1 && arr[i - 2] != '--discard-next') array.push(arr[i - 1]);
      } else {
        if (arr[i] != undefined)array.push(arr[i]);
      }
    }
    return array;
};
