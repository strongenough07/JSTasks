function fishTank (input) {
    const length = Number(input[0])
    const width = Number(input[1])
    const height = Number(input[2])
    const percent = Number(input[3]) / 100
    const aquariumTank = length * width * height
    const liters = aquariumTank / 1000
    const litersNeeded = liters * (1 - percent)
    console.log(litersNeeded);

}

fishTank(["85 ",
"75 ",
"47 ",
"17 "])