    console.log("Find Maximum Value in an Array :- \n");

    let values = [32, 67, 34, 43, 56, 67, 21];

    let maxValue = -1;

    for(let i = 0; i <= values.length; i++) {
        if(maxValue < values[i]) {
            maxValue = values[i];
        }
    }

    console.log("Original Array :", values);
    console.log("Max value in this Array :", maxValue);