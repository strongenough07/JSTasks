function workingHours (input) {
    const hour = Number(input[0])
    const day = input[1]
    
    if (day === "Sunday") {
        console.log("closed"); 
    } else if (hour >= 10 && hour <= 18) {
        console.log("open");
    } else {
        console.log("closed");
    }
    
}

