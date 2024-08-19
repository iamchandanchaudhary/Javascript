    console.log("Slice of Array :- \n");

    let number = [3, 4, 5, 6, 7, 8, 9];
    console.log("Original Number :", number);

    // Slice of Array : Breaking the Array

    // Method = 1
    console.log("Slice 1 :", number.slice());
    console.log("Slice 2 :", number.slice(2));
    console.log("Slice 3 :", number.slice(3, 7));
    console.log("Slice 4 :", number.slice(1, 2));
    console.log("Slice 5 :", number.slice(7));
    console.log("Slice 6 :", number.slice(number.length));
    console.log("Slice 7 :", number.slice());

    // Method = 2
    console.log("\nOriginal Number :", number);
    console.log("Slice 1 :", number.slice(-2));
    console.log("Slice 2 :", number.slice(-2, 1));
    console.log("Slice 3 :", number.slice(-3));
    console.log("Slice 4 :", number.slice(-1));