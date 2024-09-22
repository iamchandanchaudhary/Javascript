    console.log("Array Method Problem :- \n");

    // 1st Condition
    let numbers = [20, 90, 230, 120, 70];

    let findResult = numbers.every( (element) => {
        return (element % 10 == 0);
    });

    console.log("Original Array :", numbers);
    console.log("Multiples of 10? :", findResult);

    // 2nd Condition
    let numbers2 = [20, 95, 230, 120, 70];

    let findResult2 = numbers2.every( (element) => {
        return (element % 10 == 0);
    });

    console.log("Original Array :", numbers2);
    console.log("Multiples of 10? :", findResult2);
