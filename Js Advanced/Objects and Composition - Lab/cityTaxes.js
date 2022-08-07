function cityTaxes(name, population, treasury) {
  let taxRate = 10;
  let city = {
    name: name,
    population: population,
    treasury: treasury,
    taxRate: taxRate,
    collectTaxes: function () {
      this.population += population * this.taxRate;
    },
    applyGrowth: function (percentage) {
      this.population += (this.population * percentage) / 100;
    },
    applyRecession: function (percentage) {
      this.population -= (this.population * percentage) / 100;
    },
  };
  console.log(city);
}
city.applyGrowth(5);
