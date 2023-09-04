// // One way using a for loop and a variable
// const reverseString = function (string) {
//   let reversedStr = "";
//   for (let i = string.length - 1; i >= 0; i--) {
//     reversedStr += string[i];
//   }
//   return reversedStr;
// };

// Another way using split and reverse functions
const reverseString = function (string) {
  return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
