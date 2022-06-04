function cityRecord(name, population, treasury) {
  const city = {
    name: "",
    population: "",
    treasury: "",
  };
  let result = Object.create(city);
  result.name = name;
  result.population = population;
  result.treasury = treasury;
  return result;
}

cityRecord("Tortuga", 7000, 15000);
