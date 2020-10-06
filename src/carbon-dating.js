const { FakeXMLHttpRequest } = require("sinon");
const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  if (typeof sampleActivity != 'string')  {
    return false;
  } else if (sampleActivity < 0) { 
    return false;
  } else if (sampleActivity === '') {
    return false;
  } else if (sampleActivity != [0-9]) {
    return false;
  } else {
      k = (0.693/HALF_LIFE_PERIOD);
      number = Math.ceil((Math.log(MODERN_ACTIVITY/sampleActivity))/k);
    }
      return number;    

  // remove line with error and write your code here
};
