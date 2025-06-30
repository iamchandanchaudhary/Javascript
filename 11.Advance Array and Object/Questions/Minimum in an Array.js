    console.log("Find Minimum number in an Array by Array Method :- \n");

    let numbers = [21, 34, 87, 12, -54, 11];

    let minimum = numbers[0];

    let findMin = numbers.reduce( (min, el) => {
        if(minimum > el) {
            minimum = el;
            return el;
        }
        else {
            return min;
        }
    });

    console.log("Minimum Value :", findMin);