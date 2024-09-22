    console.log("Find Minimum Value in an Array :- \n");

    let values = [32, 67, 34, 43, 56, 67, 21];

    let minValue = values[0];

    for(let i = 0; i <= values.length; i++) {
        if(minValue > values[i]) {
            minValue = values[i];
        }
    }

    console.log("Original Array :", values);
    console.log("Max value in this Array :", minValue);