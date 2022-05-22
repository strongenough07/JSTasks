function largestNumber() {
  let args = Array.from(arguments);
  let max = args[0];
  for (let i = 1; i < args.length; i++) {
    if (max < args[i]) {
      max = args[i];
    }
  }
  return "The largest number is " + max + ".";
}
