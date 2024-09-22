    console.log("Some in Array Method :- \n");
     // 'some' Method check if any Element is true then it return the 'true' value
    // it's like 'Logical OR' --> if any condition is true then true 

    // 1st Condition 
    let number3 = [28, 56, 4, 32, 88];

    let check3 = number3.some( (el) => {
        return (el % 4 == 0);
    });

    console.log("Is any Number Divisible by 4? :", check3);

    // 2nd Condition
    let number4 = [28, 55, 4, 32, 88];

    let check4 = number4.some( (el) => {
        return (el % 4 == 0);
    });

    console.log("Is any Number Divisible by 4? :", check4);

    // 3rd Condition
    let number5 = [26, 54, 18, 34, 86];

    let check5 = number5.some( (el) => {
        return (el % 4 == 0);
    });

    console.log("Is any Number Divisible by 4? :", check5);

    // 2nd Condition
    let number6 = [26, 54, 18, 34, 88];

    let check6 = number6.some( (el) => {
        return (el % 4 == 0);
    });

    console.log("Is any Number Divisible by 4? :", check6);

