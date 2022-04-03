function animalType (input) {
    const type = input[0]

    switch (type) {
        case "dog": console.log("mammal"); break;
        //⦁	crocodile, tortoise, snake 
        case "crocodile":
        case "tortoise":
        case "snake": console.log("reptile"); break;
        default: console.log("unknown")
    }
}

animalType(["tortoise"])