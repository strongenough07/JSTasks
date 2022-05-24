function roadRadar(speed, area) {
  const motorawayLimit = 130;
  const interstateLimit = 90;
  const cityLimit = 50;
  const residentialLimit = 20;
  let overLimit = 0;
  let speedZone = 0;

  switch (area) {
    case "motorway":
      overLimit = speed - motorawayLimit;
      speedZone = motorawayLimit;
      break;
    case "interstate":
      overLimit = speed - interstateLimit;
      speedZone = interstateLimit;
      break;
    case "city":
      overLimit = speed - cityLimit;
      speedZone = cityLimit;
      break;
    case "residential":
      overLimit = speed - residentialLimit;
      speedZone = residentialLimit;
      break;
  }
  if (overLimit < 0) {
    console.log(`Driving ${speed} km/h in a ${speedZone} zone`);
  } else if (overLimit > 0 && overLimit < 20) {
    let diff = speed - speedZone;
    let status = "speeding";
    console.log(
      `The speed is ${diff} km/h faster than the allowed speed of ${speedZone} - ${status}`
    );
  } else if (overLimit > 20 && overLimit < 40) {
    let diff = speed - speedZone;
    let status = "excessive speeding";
    console.log(
      `The speed is ${diff} km/h faster than the allowed speed of ${speedZone} - ${status}`
    );
  } else if (overLimit > 40) {
    let diff = speed - speedZone;
    let status = "reckless driving";
    console.log(
      `The speed is ${diff} km/h faster than the allowed speed of ${speedZone} - ${status}`
    );
  }
}

roadRadar(200, "motorway");
