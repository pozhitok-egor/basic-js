const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
  return members.reduce((accumulator, currentValue) => {
    if(typeof(currentValue) == "string")
     accumulator.push(currentValue.replace(/ /g,'').toUpperCase()[0]);
    return accumulator;
  }, []).sort().join('');
}
