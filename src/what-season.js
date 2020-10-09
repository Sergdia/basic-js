const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
      if ((typeof date === undefined) || (typeof date === null) ){
      return false
      } else if ((date.getMonth() > 10 ) || (date.getMonth() < 2 )) {
      return 'winter'
      } else if ((date.getMonth() > 1) &&  (date.getMonth() < 5)) {
      return 'spring'
      } else if ((date.getMonth() > 4) &&  (date.getMonth() < 8)) {
      return 'summer'
      } 
      else if ((date.getMonth() > 7) &&  (date.getMonth() < 11)) {
      return 'fall'
      } 
};
