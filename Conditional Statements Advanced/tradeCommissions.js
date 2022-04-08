function tradeCommissions (input) {
    const town = input[0]
    const sales = Number(input[1])

    if (sales > 0) {
        
    switch (town) {
        case "Sofia" : 
            if (sales <= 500) {
                let result = sales * 0.05
                console.log(result.toFixed(2));
            } else if (sales >= 500 && sales <= 1000) {
                let result = sales * 0.07
                console.log(result.toFixed(2));
            } else if (sales >= 1000 && sales <= 10000) {
                let result = sales * 0.08
                console.log(result.toFixed(2));
            } else if (sales > 10000) {
                let result = sales * 0.12
                console.log(result.toFixed(2)); 
            }
        break;
        case "Varna" : 
        if (sales <= 500) {
            let result = sales * 0.045
            console.log(result.toFixed(2));
        } else if (sales >= 500 && sales <= 1000) {
            let result = sales * 0.075
            console.log(result.toFixed(2));
        } else if (sales >= 1000 && sales <= 10000) {
            let result = sales * 0.10
            console.log(result.toFixed(2));
        } else if (sales > 10000) {
            let result = sales * 0.13
            console.log(result.toFixed(2)); 
        }
        break;
        case "Plovdiv" : 
        if (sales <= 500) {
            let result = sales * 0.055
            console.log(result.toFixed(2));
        } else if (sales >= 500 && sales <= 1000) {
            let result = sales * 0.08
            console.log(result.toFixed(2));
        } else if (sales >= 1000 && sales <= 10000) {
            let result = sales * 0.12
            console.log(result.toFixed(2));
        } else if (sales > 10000) {
            let result = sales * 0.145
            console.log(result.toFixed(2)); 
        }
        break;
        default: console.log("error"); break;
    }   
    } else {
        console.log("error");
    }


}


tradeCommissions(["Sofia",
"-10005"])