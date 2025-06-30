    console.log("Find Maximum Value in Array with Reduce Array Method :- \n");

    let numbers = [3, 6, 8, 2, 3, 1, 7, 5, 8];

    let findMax = numbers.reduce( (max, element) => {
        if(max < element) {
            return element;
        }
        else {
            return max;
        }
    });

    console.log("Original Values :", numbers);
    console.log("Max Value in this Array :", findMax);