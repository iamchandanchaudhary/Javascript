    console.log("filter in Array Method :- \n");

    let numbers = [1, 4, 5, 8, 3, 2, 7, 6];

    // 'filter' method use to perform any Filter in Array --> if the condition is True then it will pass in new Array
    let even = numbers.filter ( (el) => {
        return (el % 2 == 0);
    });

    console.log("Even Values in Array :", even);

    let odd = numbers.filter ( (el) => {
        return (el % 2 != 0);
    });

    console.log("Odd Values in Array :", odd);

    let lessNum = numbers.filter ( (el) => {
        return (el < 5);
    });

    console.log("Less then 5 Values in Array :", lessNum);