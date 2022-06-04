function townPopulation(input) {
  let towns = new Map();
  for (let line of input) {
    let tokens = line.split(" <-> ");
    let townName = tokens[0];
    let townPopulation = Number(tokens[1]);
    if (towns.has(townName)) {
      towns.set(townName, towns.get(townName) + townPopulation);
    } else {
      towns.set(townName, townPopulation);
    }
  }
  for (let [townName, townPopulation] of towns) {
    console.log(`${townName} : ${townPopulation}`);
  }
}

townPopulation([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
