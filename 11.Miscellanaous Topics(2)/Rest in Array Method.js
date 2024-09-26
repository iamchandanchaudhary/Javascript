    console.log("Rest in Array Method :- \n");

    function sum(...args) {
        for(let i = 0; i < args.length; i++) {
            console.log("The Number :", args[i]);
        }
    }

    sum(1, 2, 3, 4, 5);

    // Argument Collection
    function arg() {
        console.log(arguments);
        console.log("Length of Argument :", arguments.length);
    }

    arg(1, 2, 3, 4);

    // Use it like array
    function addition(...args) { 
        return args.reduce( (sum, el) => 
         sum + el );
    }

    console.log("Addition :", addition(12, 32, 43, 45, -17));