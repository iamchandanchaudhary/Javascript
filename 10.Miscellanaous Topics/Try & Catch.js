    console.log("Try & Catch :- \n");

    // case 1 - When the error Found
    console.log("Chandan");
    console.log("Chandan");
    console.log("Chandan");

    try {
        console.log(a);
    } catch {
        console.log("(Error Found - a is not found)");
    }

    console.log("Chandan 2");
    console.log("Chandan 2");
    console.log("Chandan 2\n");

    // case 2 - if the error not found
    console.log("Chandan");
    console.log("Chandan");
    console.log("Chandan");

    let a = 15;
    try {
        console.log(a);
    } catch {
        console.log("Error Found");
    }

    console.log("Chandan 2");
    console.log("Chandan 2");
    console.log("Chandan 2\n");

    // case 3 - Error found and Print the error details
    console.log("Chandan");
    console.log("Chandan");
    console.log("Chandan");

    try {
        console.log(b);
    } catch(e) {
        console.log(e);
    }

    console.log("Chandan 2");
    console.log("Chandan 2");
    console.log("Chandan 2");