function cake(input) {
    let index = 0;
    let cakeLength = Number(input[index]);
    index++;
    let cakeWidth = Number(input[index]);
    index++;
    let command = input[index];
    let piecesCount = cakeLength * cakeWidth;
    let isEmpty = false;

    while (command !== "STOP" && !isEmpty) {
        command = Number(input[index]);
        if (command <= piecesCount) {
            piecesCount -= command;
            index++;          
        } else {
            piecesCount -= command;
            console.log(`No more cake left! You need ${Math.abs(piecesCount)} pieces more.`);
            isEmpty = true;
        }
        command = input[index];
    }
    if (!isEmpty) {
        console.log(`${Math.abs(piecesCount)} pieces are left.`);
    }
}

cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])

cake(["10",
"2",
"2",
"4",
"6",
"STOP"])