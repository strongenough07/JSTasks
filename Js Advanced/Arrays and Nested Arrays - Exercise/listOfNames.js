function listOfNames(arr) {
  let result = arr.sort();

  for (let i = 0; i < arr.length; i++) {
    console.log(`${i + 1}.${result[i]}`);
  }
}

listOfNames(["John", "Bob", "Christina", "Ema"]);
