function moving (input) {
    let index = 0;
    let boxLength = Number(input[index]);
    index++;
    let boxWidth = Number(input[index]);
    index++;
    let boxHeight = Number(input[index]);
    index++;
    let command = input[index];
    let sizeBox = boxLength * boxWidth * boxHeight;
    let sizeBoxCounter = 0;
    let isEmpty = false;
    
    while (command !== "Done" && !isEmpty) {
        command = Number(input[index]);
        if (sizeBox >= sizeBoxCounter) {
        sizeBoxCounter += command;
        } else {
            console.log(`No more free space! You need ${Math.abs(sizeBoxCounter - sizeBox)} Cubic meters more.`);
            isEmpty = true;
        }
        index++;
        command = input[index]
        
    }
    if (!isEmpty) {
        console.log(`${Math.abs(sizeBoxCounter - sizeBox)} Cubic meters left.`);
        
    }
}



moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])

moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])