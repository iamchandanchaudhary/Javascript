    console.log("For Each Array Method :- \n");
    // 'forEach' is use to Call all the elements of Array

    let arr = [1, 2, 3, 4, 5];

    // with Variable Function
    console.log("With Variable Function : ");
    let print = function(element) {
        console.log(element);
    }

    arr.forEach(print);

    // Direct Function
    console.log("\nWith Direct Function : ");
    arr.forEach(function(element) {
        console.log(element);
    });

    // Arrow Function
    console.log("\nWith Arrow Function : ");
    arr.forEach( (element) => {
        console.log(element);
    });