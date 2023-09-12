// // One way using a new array and a for loop and add elements
// // of arr to new array if they are not present in `removeElements`
// const removeFromArray = function (arr, ...removeElements) {
//   let newArr = [];
//   for (let i of arr) {
//     if (removeElements.includes(i)) {
//       continue;
//     }
//     newArr.push(i);
//   }
//   return newArr;
// };

// // Another Way is just to delete the elements of removeElements
// // from Arr
// const removeFromArray = function (arr, ...removeElements) {
//   for (let i of removeElements) {
//     while (arr.indexOf(i) !== -1) {
//       arr.splice(arr.indexOf(i), 1); // remove that element from the array
//     }
//   }
//   return arr;
// };

const removeFromArray = function (arr, ...removeElements) {
  let newArr = arr.filter((element) => {
    if (!removeElements.includes(element)) {
      return element;
    }
  });
  return newArr;
};

console.log(removeFromArray([1, 2, 3, 4], 7, "tacos"));
// Do not edit below this line
module.exports = removeFromArray;
