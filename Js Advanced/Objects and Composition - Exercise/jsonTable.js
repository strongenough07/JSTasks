function jsonTable(input) {
  const rows = [];
  // обхождане на входа
  for (let line of input) {
    //json parse на елементите
    const person = JSON.parse(line);
    // съставяне низ, съдържащ HTML ред със стойностите от обекта
    rows.push(
      `\t<tr>\n\t\t<td>${person.name}</td>\n\t\t<td>${person.position}</td>\n\t\t<td>${person.salary}</td>\n\t</tr>`
    );
  }
  // отпечатване началото на таблицата
  console.log("<table>");
  // отпечатване на резултата
  console.log(rows.join("\n"));
  // отпечатване края на таблицата
  console.log("</table>");
}

jsonTable([
  '{"name":"Pesho","position":"Promenliva","salary":100000}',
  '{"name":"Teo","position":"Lecturer","salary":1000}',
  '{"name":"Georgi","position":"Lecturer","salary":1000}'
  
]);
