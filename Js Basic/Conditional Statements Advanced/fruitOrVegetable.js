function fruitOrVegetable (input) {
    const type = input[0]
    
    switch (type) {
        //banana, apple, kiwi, cherry, lemon и grapes
        case "banana": 
        case "apple": 
        case "kiwi": 
        case "cherry": 
        case "lemon": 
        case "grapes": console.log("fruit"); break;
        //tomato, cucumber, pepper и carrot
        case "tomato": 
        case "cucumber": 
        case "pepper":
        case "carrot": console.log("vegetable"); break;
        default: console.log("unknown"); break;
    }
}

fruitOrVegetable(["cucumber"])