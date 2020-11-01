const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  options.repeatTimes = options.repeatTimes === undefined ? 1 : options.repeatTimes;
  options.separator = options.separator === undefined ? '+' : options.separator;
  options.addition = options.addition === undefined ? '' : String(options.addition);
  options.additionRepeatTimes = options.additionRepeatTimes === undefined ? 1 : options.additionRepeatTimes;
  options.additionSeparator = options.additionSeparator === undefined ? '' : options.additionSeparator;
  let additionalArray = [];
  for (let i = 0; i < options.additionRepeatTimes; i++) {
      additionalArray.push(options.addition);
  }
  additionalArray = additionalArray.join(options.additionSeparator);
  str += additionalArray;
  let resultativeArray = [];
  for (let i = 0; i < options.repeatTimes; i++) {
      resultativeArray.push(str);
  }
  resultativeArray = resultativeArray.join(options.separator);
  return resultativeArray;
};
