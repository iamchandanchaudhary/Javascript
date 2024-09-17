    console.log("Loop in Array :- \n");

    let number = [23, 12, 21, 32, 42];

    console.log("Number :", number);

    // Method 1
    for(let i = 0; i < number.length; i++) {
        let element = number[i];
        console.log(element);
    }

    // Method 2
    number.forEach((value, index, arr)=>{
        console.log(value, index, arr);
    })