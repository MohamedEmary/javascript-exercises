const leapYears = function (year) {
  if (typeof year !== "number") return "ERROR";
  // A leap year is divisible by 4, except if it
  // is also divisible by 100 and not divisible by 400
  return year % 4 === 0 && (year < 100 || year % 100 !== 0 || year % 400 === 0);
};

// Do not edit below this line
module.exports = leapYears;
