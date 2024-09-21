    console.log("Arrow Function :- \n");

    // Arrow Function
    // 1st program
    const sum = (a, b) => {
        console.log("Sum :", a + b);
    };

    sum(10, 5);

    // 2nd program
    const printName = () => {
        console.log("Name :","Chandan Chaudhary");
    };

    printName();

    // 3rd Program
    const cube = (n) => {
        return (n**3);
    };

    console.log("Cube :", cube(4));

    // 4th Program
    const power = (n, p) => {
        console.log("Power :", n**p);
    };

    power(2, 6);

    // 5th Program
    const square = number => { // You can skip () when a single argument
        return (number**2);
    };

    console.log("Cube :", square(6));