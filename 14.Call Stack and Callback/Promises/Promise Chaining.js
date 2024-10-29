function savetoDB(data) {
    return new Promise((resolve, reject) => {
        let internet = Math.floor(Math.random() * 10 + 1);

        if(internet > 4) {
            resolve("Success: Data1 was Saved.");
        }
        else {
            reject("Failure: Data1 was not Saved, Slow network.");
        }
    });
}

/*
// Promise Chaining
savetoDB("Chandan Chaudhary") // Improved Version
.then(() => {
    console.log("Data1 Saved, Promise was resolve.");

    // 2nd Data
    savetoDB("Avinash Mishra")
    .then(() => {
        console.log("Data2 Saved, Promise was resolve.");
        
        // 3rd Data
        savetoDB("Vishal Khanna")
        .then(() => {
            console.log("Data3 Saved, Promise was resolve.");
        })
        .catch(() => {
            console.log("Promise3 was rejected.");
        })
    })
    .catch(() => {
        console.log("Promise2 was rejected.");
    })
})

.catch(() => {
    console.log("Promise1 was rejected");
})
*/

// Promise Chaining ==> Improved Version
savetoDB("Chandan Chaudhary")
.then(() => {
    console.log("Data1 Saved, Promise was resolve.");

    // 2nd Data
    return savetoDB("Avinash Mishra"); 
})
.then(() => {
    console.log("Data2 Saved, Promise was resolve.");

    // 3rd Data
    return savetoDB("Vishal Khanna");
})  

.then(() => {
    console.log("Data3 Saved, Promise was resolve.");
})

.catch(() => {
    console.log("Promise was rejected");
})