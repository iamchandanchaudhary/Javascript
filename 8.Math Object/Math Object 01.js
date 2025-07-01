    console.log("Math Object :- \n");
    
    console.log("All Math Object : ", Math);

    console.log("Value of PI :", Math.PI);

    console.log("E Constant :", Math.E);


    // Absolute Method
    let absoluteValue1 = Math.abs(12);
    let absoluteValue2 = Math.abs(-12);
    let absoluteValue3 = Math.abs(-12.5);
    let absoluteValue4 = Math.abs(-12.3);

    console.log("\nAbsolute Value :", absoluteValue1);
    console.log("Absolute Value :", absoluteValue2);
    console.log("Absolute Value :", absoluteValue3);
    console.log("Absolute Value :", absoluteValue4, "\n");


    // Power Method
    let power = Math.pow(5, 2);
    console.log("Power :", power);

    let power2 = Math.pow(5, 3);
    console.log("Power :", power2);

    let squareRoot = Math.sqrt(8);
    console.log("Square root of 8:", squareRoot);
    

    // Random Number
    let number = Math.random();
    console.log("Random Number :", number);


    // Floor --> Round of the Nearest Smallest Integer value (Always <=)
    let floorNum1 = Math.floor(5);
    let floorNum2 = Math.floor(5.2);
    let floorNum3 = Math.floor(5.9999);
    let floorNum4 = Math.floor(-5.6);

    console.log("\n1st Floor Value :", floorNum1);
    console.log("2nd Floor Value :", floorNum2);
    console.log("3rd Floor Value :", floorNum3);
    console.log("4th Floor Value :", floorNum4);


    // Ceil --> Round of the Nearest Largest Integer value (Always <=)
    let ceilNum1 = Math.ceil(5);
    let ceilNum2 = Math.ceil(5.2);
    let ceilNum3 = Math.ceil(5.9999);
    let ceilNum4 = Math.ceil(-5.6);

    console.log("\n1st Ceil Value :", ceilNum1);
    console.log("2nd Ceil Value :", ceilNum2);
    console.log("3rd Ceil Value :", ceilNum3);
    console.log("4th Ceil Value :", ceilNum4);


    // Round --> Round of the Nearest Integer value
    let roundNum1 = Math.round(5);
    let roundNum2 = Math.round(5.2);
    let roundNum3 = Math.round(5.9999);
    let roundNum4 = Math.round(-5.6);
    let roundNum5 = Math.round(5.6);

    console.log("\n1st Round Value :", roundNum1);
    console.log("2nd Round Value :", roundNum2);
    console.log("3rd Round Value :", roundNum3);
    console.log("4th Round Value :", roundNum4);
    console.log("5th Round Value :", roundNum5);