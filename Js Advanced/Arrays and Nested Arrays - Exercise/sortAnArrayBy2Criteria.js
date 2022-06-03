function sortAnArrayBy2Criteria(arr) {
  const newArr = arr
    .sort()
    .sort((firstName, secondName) => firstName.length - secondName.length);

  console.log(newArr.join("\n"));
}

sortAnArrayBy2Criteria(["alpha", "beta", "gamma"]);
