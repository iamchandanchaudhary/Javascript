    console.log("Implicit return in Arrow Function :- \n");

    // 1st Program
    const multiply = (a, b) => (
        a * b // no need to 'return' if the function does not perform advance concepts
    );

    console.log("Multiply :", multiply(15, 3));

    // 2nd Program
    const square = n => 
        n**2;

    // You can make it shorter then shorter
    console.log("Square :", square(5));

    // 3rd Program
    const sum = (x, y) => 
        x + y;

    console.log("Sum :", sum(3, 7));