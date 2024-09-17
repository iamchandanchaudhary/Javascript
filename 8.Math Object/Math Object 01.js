    console.log("Math Object :- \n");
    
    console.log("All Math Object : ", Math);

    console.log("Value of PI :", Math.PI);

    console.log("E Constant :", Math.E);

    // Absolute Method
    let absoluteValue1 = Math.abs(12);
    let absoluteValue2 = Math.abs(-12);
    let absoluteValue3 = Math.abs(-12.5);

    console.log("Absolute Value :", absoluteValue1);
    console.log("Absolute Value :", absoluteValue2);
    console.log("Absolute Value :", absoluteValue3 , "\n");

    // Power Method
    let power = Math.pow(5, 2);
    console.log("Power :", power);

    let power2 = Math.pow(5, 3);
    console.log("Power :", power2);

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