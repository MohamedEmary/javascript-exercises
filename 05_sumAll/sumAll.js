const sumAll = function (start, end) {
  if (typeof start !== "number" || typeof end !== "number") return "ERROR";
  if (start < 0 || end < 0) return "ERROR";
  // if start is larger than end, swap them
  if (start > end) [start, end] = [end, start];
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;

// To swap to numbers in js
