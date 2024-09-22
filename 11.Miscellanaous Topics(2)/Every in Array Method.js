    console.log("Every in Array Method :- \n");
    // 'every' Method check every numbers present in the array & return 'true' if every condition is true but they ruturn false if the any one condition is wrong
    // it's like 'Logical AND' --> if every condition is true then true 

    let number = [28, 56, 4, 32, 88];

    let check = number.every( (el) => {
        return (el % 4 == 0);
    });

    console.log("Is every number divisible by 4? :", check);


    let number2 = [28, 54, 4, 32, 88];

    let check2 = number2.every( (el) => {
        return (el % 4 == 0);
    });

    console.log("Is every number divisible by 4? :", check2);
    