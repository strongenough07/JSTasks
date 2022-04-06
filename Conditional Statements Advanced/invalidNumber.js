function invalidNumber (input) {
    const number = Number(input[0])
    if (number === 0) {
             
    } else if (!(number >= 100 && number <= 200)) {
        console.log("Test");
    }
}

invalidNumber(["0"])