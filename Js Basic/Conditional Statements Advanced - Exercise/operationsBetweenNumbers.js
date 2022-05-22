function operationsBetweenNumbers (input) {
    const numOne = Number(input[0])
    const numTwo = Number(input[1])
    const mathOperations = input[2]
    let result = ""

    if (mathOperations === "+") {
        result = numOne + numTwo
    } else if (mathOperations === "-") {
        result = numOne - numTwo
    } else if (mathOperations === "*") {
        result = numOne * numTwo
    } else if (mathOperations === "/") {
        result = numOne / numTwo
    } else if (mathOperations === "%") {
        result = numOne % numTwo
    }

    let evenOrOdd = ""
    if (result % 2 === 0) {
        evenOrOdd = "even"
    } else {
        evenOrOdd = "odd"
    }
    
    if (mathOperations === "+" ) {
        console.log(`${numOne} + ${numTwo} = ${result} - ${evenOrOdd}`)
    } else if (mathOperations === "/" && numTwo > 0) {
        let result = numOne / numTwo
        console.log(`${numOne} / ${numTwo} = ${result.toFixed(2)}`);
    } else if (mathOperations === "%" && numTwo > 0) {
        let result = numOne % numTwo
        console.log(`${numOne} % ${numTwo} = ${result}`);
    } else if (mathOperations === "-") {
        let result = numOne - numTwo
        console.log(`${numOne} - ${numTwo} = ${result} - ${evenOrOdd}`);
    } else if (mathOperations === "*") {
        let result = numOne * numTwo
        console.log(`${numOne} * ${numTwo} = ${result} - ${evenOrOdd}`);
    }
     else {
        console.log(`Cannot divide ${numOne} by zero`);
    }
    
 }


operationsBetweenNumbers(["7",
"3",
"*"]  )