    console.log("Question 1 :- \n");

    let numbers = [12, 34, 26, 6, 8];

    let getResult = numbers.map( (el) => {
        return el * el;
    });

    console.log("Square of Array :", getResult);