function lastKNumbersSequence(n, k) {
  let result = [1];
  for (let i = 1; i < n; i++) {
    let sum = result.slice(-k).reduce((a, b) => a + b);
    result.push(sum);
  }
  return result;
}

console.log(lastKNumbersSequence(6, 3));
console.log(lastKNumbersSequence(8, 2));
console.log(lastKNumbersSequence(10, 10));
