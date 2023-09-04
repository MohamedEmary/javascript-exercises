const convertToCelsius = function (F) {
  const C = (F - 32) / 1.8;
  return +C.toFixed(1);
};

const convertToFahrenheit = function (C) {
  let F = C * 1.8 + 32;
  return +F.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
