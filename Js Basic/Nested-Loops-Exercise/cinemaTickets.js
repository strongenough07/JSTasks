function cinemaTickets(input) {
  let index = 0;
  let inputLine = input[index];
  let countStandartsTickets = 0;
  let countKidsTickets = 0;
  let countStudentTickets = 0;

  while (inputLine !== "Finish") {
    let movieName = inputLine;
    index++;
    let allTickets = Number(input[index]);
    let freeSpaceInTheCinema = allTickets;
    index++;
    let ticketType = input[index];
    while (ticketType !== "End") {
      switch (ticketType) {
        case "standard":
          countStandartsTickets++;
          break;
        case "student":
          countStudentTickets++;
          break;
        case "kid":
          countKidsTickets++;
          break;
      }
      freeSpaceInTheCinema--;
      if (freeSpaceInTheCinema === 0) {
        break;
      }
      index++;
      ticketType = input[index];
    }
    let boughtTickets = allTickets - freeSpaceInTheCinema;
    let perectegeFull = (boughtTickets / allTickets) * 100;
    console.log(`${movieName} - ${perectegeFull.toFixed(2)}% full.`);
    index++;
    inputLine = input[index];
  }
  let allBoughtTickets =
    countKidsTickets + countStandartsTickets + countStudentTickets;
  console.log(`Total tickets: ${allBoughtTickets}`);
  console.log(
    `${((countStudentTickets / allBoughtTickets) * 100).toFixed(
      2
    )}% student tickets.`
  );
  console.log(
    `${((countStandartsTickets / allBoughtTickets) * 100).toFixed(
      2
    )}% standard tickets.`
  );
  console.log(
    `${((countKidsTickets / allBoughtTickets) * 100).toFixed(2)}% kids tickets.`
  );
}

cinemaTickets([
  "Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish",
]);
