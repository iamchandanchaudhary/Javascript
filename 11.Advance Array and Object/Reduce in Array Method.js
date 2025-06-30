    console.log("Reduce in Array Method :- \n");

    let values = [2, 5, 8, 3, 9];

    let finalValue = values.reduce( (res, el) => {
        return (res + el);
    });

    console.log("Sum of Array with Reduce Method :", finalValue);