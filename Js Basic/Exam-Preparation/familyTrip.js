function familyTrip(input) {
  let budget = Number(input[0]);
  let nights = Number(input[1]);
  let priceNights = Number(input[2]);
  let additionalCostsInP = Number(input[3]);

  if (nights > 7) {
    priceNights -= 0.5;
  }
  let nightsMoney = nights * priceNights;
  console.log(nightsMoney);
  let additionalCosts = (budget -= additionalCostsInP);
}

familyTrip(["800.50", "8", "100", "2"]);
