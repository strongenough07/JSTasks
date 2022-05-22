function usdToBgn(input) {
    const usdToBgn = 1.79549 
    let usd = Number(input[0])
    let bgn = usd * usdToBgn
    
    console.log(bgn);
}

usdToBgn(["22"])