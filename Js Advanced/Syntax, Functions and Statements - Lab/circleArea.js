function circleArea(input) {
  let result;
  let inputType = typeof input;
  if (inputType === "number") {
    let x = Math.PI;
    let y = input * input;
    result = (x * y).toFixed(2);
  } else {
    result = `We can not calculate the circle area, because we receive a string.`;
  }
  return console.log(result);
}

circleArea(10);
