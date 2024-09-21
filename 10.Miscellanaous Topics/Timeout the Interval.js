    console.log("Timeout the Interval :- \n");

    let id = setInterval( () => {
        console.log("Chandan Chaudhary");
    }, 2000);

    setTimeout( () => {
        clearInterval(id);
        console.log("Program Done :)");
    }, 10000);