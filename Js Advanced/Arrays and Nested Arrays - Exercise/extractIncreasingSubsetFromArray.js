function extractIncreasingSubsetFromArray(arr) {
  let output = arr.reduce((acc, curr, i) => {
    const lastElement = acc[acc.length - 1];
    if (curr >= lastElement || lastElement === undefined) {
      acc.push(curr);
    }
    return acc;
  }, []);
  return output;
}
extractIncreasingSubsetFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
