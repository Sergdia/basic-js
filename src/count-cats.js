const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix)  {

  let number = 0;
  
  for (let i = 0; i < matrix.length; i++) {
  
      var innerArrayLength = matrix[i].length;
  
      for (let j = 0; j < innerArrayLength; j++) {
          if (matrix[i][j] === '^^') {
            number++
          }
      }
  }
  
  return number.toString();
};
