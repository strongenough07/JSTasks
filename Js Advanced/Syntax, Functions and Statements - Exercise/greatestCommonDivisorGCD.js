function greatestCommonDivisorGCD(a, b) {
  const small = Math.min(a, b);
  let gcd = 1;

  for (let i = 1; i <= small; i++) {
    if (a % i == 0 && b % i == 0) {
      gcd = i;
    }
  }
  console.log(gcd);
}

greatestCommonDivisorGCD(15, 5);

// function greatestCommonDivisorGCD(a, b) {
//   let small = Math.min(a, b);
//   let large = Math.max(a, b);
//   let remainder = 1;

//   do {
//     remainder = large % small;
//     large = small;
//     small = remainder;
//   } while (remainder != 0);
//   console.log(large);
// }
// greatestCommonDivisorGCD(15, 5);
