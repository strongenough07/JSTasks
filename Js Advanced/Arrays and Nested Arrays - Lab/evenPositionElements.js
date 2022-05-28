function evenPositionElements(arr) {
  console.log(arr.filter((a, i) => i % 2 === 0).join(" "));
}

evenPositionElements(["20", "30", "40", "50", "60"]);
