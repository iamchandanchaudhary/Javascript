function savetoDB(data) {
    return new Promise((resolve, reject) => {
        let internet = Math.floor(Math.random() * 10 + 1);

        if(internet > 4) {
            resolve("Success: Data was Saved.");
        }
        else {
            reject("Failure: Data was not Saved, Slow network.");
        }
    });
}

// Promise Chaining ==> Improved Version
savetoDB("Chandan Chaudhary")
.then((result) => {
    console.log("Data1 Saved, Promise was resolve.");
    console.log("Result :", result);

    // 2nd Data
    return savetoDB("Avinash Mishra"); 
})
.then((result) => {
    console.log("Data2 Saved, Promise was resolve.");
    console.log("Result :", result);

    // 3rd Data
    return savetoDB("Vishal Khanna");
})  

.then((result) => {
    console.log("Data3 Saved, Promise was resolve.");
    console.log("Result :", result);
})

.catch((error) => {
    console.log("Promise was rejected");
    console.log("Error :", error);
})