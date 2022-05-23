function daysInAmonth(month, year) {
  let numMonth = Number(month);
  let numYear = Number(year);
  let day = new Date(numYear, numMonth, 0).getDate();

  console.log(day);
}
daysInAmonth(11, 2012);
