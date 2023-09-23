const fibonacci = function (num) {
  if (num < 0) return "OOPS";
  let fibonacciArr = [1];
  let curr = 1;
  for (let i = 1; i < num; i++) {
    fibonacciArr.push(curr);
    curr =
      fibonacciArr[fibonacciArr.length - 1] +
      fibonacciArr[fibonacciArr.length - 2];
  }
  return fibonacciArr[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
