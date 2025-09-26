    console.log("Higher order Function :- \n");

    let multiName = function(func, size) {
        for(let i = 1; i <= size; i++) {
            func();
        }
    }

    let name = function() {
        console.log("Chandan");
    }

    // name = "Aman";

    multiName(name, 10);