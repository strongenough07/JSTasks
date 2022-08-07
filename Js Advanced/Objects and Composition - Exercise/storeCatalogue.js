function storeCatalogue(input) {
  const catalog = {};

  // обхождане входа
  for (let line of input) {
    // изкарваме името и цената на всеки елемент
    const [product, price] = line.split(" : ");
    // ако не съществува буквата => създаваме я (обект)
    const letter = product[0];
    if (catalog.hasOwnProperty(letter) === false) {
      catalog[letter] = {};
    }
    // достъпваме стойноста зад буквата
    catalog[letter][product] = price;
    // запазваме обработената стойност в обекта
  }
  // сортираме каталога (по началната буква)
  const sortedKeys = Object.keys(catalog).sort((a, b) => a.localeCompare(b));
  for (let key of sortedKeys) {
    // отпечатваме буквата
    console.log(key);
    // сортираме обекта зад буквата
    const sortedProducts = Object.keys(catalog[key]).sort((a, b) =>
      a.localeCompare(b)
    );
    // отпечатваме продуктите
    for (let product of sortedProducts) {
      console.log(`  ${product}: ${catalog[key][product]}`);
    }
  }
}

storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10"
]);
