function printEveryNthElementFromAnArray(array, step) {
  let arr = [];
  for (let index = 0; index < array.length; index += step) {
    arr.push(array[index]);
  }
  return arr;
}

printEveryNthElementFromAnArray(["5", "20", "31", "4", "20"], 2);
