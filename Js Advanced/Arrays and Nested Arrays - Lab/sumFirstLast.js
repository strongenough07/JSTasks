function sumFirstLast(arr) {
  const a = +arr[0];
  const b = +arr[arr.length - 1];
  return a + b;
}
sumFirstLast(["20", "30", "40"]);
