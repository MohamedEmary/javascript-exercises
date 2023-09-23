const palindromes = function (string = "") {
  string = string
    .toLowerCase()
    .split("")
    .filter((ch) => {
      const punctuation = [" ", ",", ".", "!"];
      return !punctuation.includes(ch);
    })
    .join("");
  string;
  let reveredStr = [...string].reverse().join("");
  return string === reveredStr;
};

// Do not edit below this line
module.exports = palindromes;
