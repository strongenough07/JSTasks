function vacationBooksList (input) {
    const totalPages = Number(input[0])
    const pagesPerHour = Number(input[1])
    const numOfDays = Number(input[2])
    // const totalHoursNeeded = totalPages / pagesPerHour
    // const hoursPerDay = totalHoursNeeded / numOfDays
    const hoursPerDay = (totalPages /pagesPerHour) / numOfDays
    console.log(hoursPerDay);
}

vacationBooksList(["212 ",
"20 ",
"2 "])