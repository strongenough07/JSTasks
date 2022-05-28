function validityChecker(...params) {
  let x1 = params[0];
  let y1 = params[1];
  let x2 = params[2];
  let y2 = params[3];

  isValid(x1, y1, 0, 0);
  isValid(x2, y2, 0, 0);
  isValid(x1, y1, x2, y2);

  function isValid(x1, y1, x2, y2) {
    let distH = x1 - x2;
    let distY = y1 - y2;
    const dist = Math.sqrt(distH ** 2 + distY ** 2);

    if (Number.isInteger(dist)) {
      console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
      console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
  }
}

validityChecker(3, 0, 0, 4);
