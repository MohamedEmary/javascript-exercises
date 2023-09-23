const add = function (...numbers) {
  let result = 0;
  for (num of numbers) {
    result += num;
  }
  return result;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

// const sum = function (numArray) {
//   let result = 0;
//   for (num of numArray) {
//     result += num;
//   }
//   return result;
// };

const sum = function (numArray = []) {
  return numArray.reduce((total, next) => total + next, 0);
};

// const multiply = function (numArray) {
//   let result = 1;
//   for (num of numArray) {
//     result *= num;
//   }
//   return result;
// };

const multiply = function (numArray) {
  return numArray.reduce((total, curr) => (total *= curr), 1);
};

// const power = function (num, pow) {
//   return num ** pow;
// };

const power = function (num, pow) {
  return Math.pow(num, pow);
};

const factorial = function (num) {
  if (num === 1 || num === 0) return 1;
  else {
    let result = 1;
    for (let i = num; i > 0; i--) {
      result *= i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
