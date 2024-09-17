    console.log("Methods in Function :- \n");

    let x = 15;
    let y = 8;

    const calculator = {
        add: function(a, b) {
            return a + b;
        },

        sub: function(a, b) {
            return a - b;
        },

        mul: function(a, b) {
            return a * b;
        },

        div: function(a, b) {
            return a / b;
        }
    };

    console.log("Calculator View :", calculator);

    console.log("Addition :", calculator.add);

    console.log("Add :", calculator.add(x, y));
    console.log("Subtract :", calculator.sub(x, y));
    console.log("Multiply :", calculator.mul(x, y));
    console.log("Division :", calculator.div(x, y));