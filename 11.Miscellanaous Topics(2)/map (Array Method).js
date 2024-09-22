    console.log("Array Map(Array Method) :- \n");

    // 'map' Method is use to store the value in new Array with any Modification

    let number = [1, 2, 3, 4, 5];
    console.log("Original Array :", number);

    // Double the Number of Array by using 'map' Method
    let double = number.map ((el) => {
        return (el * 2); 
    });

    console.log("Double Array :", double);

    // Square the Number of Array by using 'map' Method
    let square = number.map ((el) => {
        return (el * el); 
    });

    console.log("Square of Array :", square);