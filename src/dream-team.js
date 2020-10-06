const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if ((Array.isArray(members) == false) || (typeof members === undefined) || (typeof members === null) ){
    return false
    
  } else {
    var len = members.length;
    let b =[];
    for (i = 0; i < len; i++)
    if (typeof members[i] === 'string') {
    b.push(members[i].trim().slice(0, 1).toUpperCase());
  }  

return b.sort().join('').toString();
}
};
