    // 1st function
    function printMass() {
        console.log("Hello from Chandan");
        console.log("This is JavaScript");
    }

    // 2nd function
    function printSum() {
        let a = 15;
        let b = 21;

        let sum = a + b;
        console.log("\nSum :", sum, "\n");
    }

    // 3rd Function
    function print1To10() {
        for(let i = 1; i <= 10; i++) {
            console.log(i);
        }
    }

    // 4th Function
    function oddEven() {
        let number = 13;

        if(number % 2 == 0) {
            console.log("Even Number");
        }
        else {
            console.log("Odd Number");
        }
    }

    console.log("Function Basic Operations :- \n");

    printMass();
    printMass();
    printMass();

    printSum();

    print1To10();

    oddEven();