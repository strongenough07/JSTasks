function fruit(fruitArg, weightInGrams, price) {
  const weightInKilos = weightInGrams / 1000;
  const total = weightInKilos * price;

  console.log(
    "I need $" +
      total.toFixed(2) +
      " to buy " +
      weightInKilos.toFixed(2) +
      " kilograms " +
      fruitArg +
      "."
  );
}
fruit("orange", 2500, 1.8);
