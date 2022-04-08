function fruitShop (input) {
    const fruit = input[0]
    const day = input[1]
    const quantity = Number(input[2])

    const priceOfBanana = 2.5
    const priceOfApple = 1.2
    const priceOfOrange = 0.85
    const priceOfGrapefruit = 1.45
    const priceOfKiwi = 2.7
    const priceOfPineapple = 5.5
    const priceOfGrapes = 3.85


    
    const weekendPriceOfBanana = 2.7
    const weekendPriceOfApple = 1.25
    const weekendPriceOfOrange = 0.90
    const weekendPriceOfGrapefruit = 1.60
    const weekendPriceOfKiwi = 3.0
    const weekendPriceOfPineapple = 5.6
    const weekendPriceOfGrapes = 4.20
    //плод (banana / apple / orange / grapefruit / kiwi / pineapple / grapes), ден от седмицата 
    //(Monday / Tuesday / Wednesday / Thursday / Friday / Saturday / Sunday
    switch (day) {
        case "Monday" : 
        case "Tuesday" : 
        case "Wednesday" :
        case "Thursday" : 
        case "Friday" : 
            if (fruit === "apple") {
                let result = priceOfApple * quantity
                console.log(result.toFixed(2));
            } else if (fruit === "banana") {
                let result = priceOfBanana * quantity
                console.log(result.toFixed(2));
            } else if (fruit === "orange") {
                let result = priceOfOrange * quantity
                console.log(result.toFixed(2));            
            } else if (fruit === "grapefruit") {
                let result = priceOfGrapefruit * quantity
                console.log(result.toFixed(2));
            } else if (fruit === "kiwi") {
                let result = priceOfKiwi * quantity
                console.log(result.toFixed(2));
            } else if (fruit === "pineapple") {
                let result = priceOfPineapple * quantity
                console.log(result.toFixed(2));
            } else if (fruit === "grapes") {
                let result = priceOfGrapes * quantity
                console.log(result.toFixed(2));               
            } else {
                console.log("error");
            }
            break;
            case "Saturday" :
            case "Sunday" : 
            if (fruit === "apple") {
                let result = weekendPriceOfApple * quantity
                console.log(result.toFixed(2));
            } else if (fruit === "banana") {
                let result = weekendPriceOfBanana * quantity
                console.log(result.toFixed(2)); 
            } else if (fruit === "orange") {
                let result = weekendPriceOfOrange * quantity
                console.log(result.toFixed(2));
            } else if (fruit === "grapefruit") {
                let result = weekendPriceOfGrapefruit * quantity
                console.log(result.toFixed(2));
            } else if (fruit === "kiwi") {
                let result = weekendPriceOfKiwi * quantity
                console.log(result.toFixed(2));
            } else if (fruit === "pineapple") {
                let result = weekendPriceOfPineapple * quantity
                console.log(result.toFixed(2));
            } else if (fruit === "grapes") {
                let result = weekendPriceOfGrapes * quantity
                console.log(result.toFixed(2));
            } else {
                console.log("error");
            }
            break;
            default: console.log("error")
    }
}

fruitShop(["banana",
"Tuesday",
"2"])

fruitShop(["orange",
"Sunday",
"3"])