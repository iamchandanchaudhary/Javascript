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

let request = savetoDB("Chandan Chaudhary");   // request = Promise Object

request
.then(() => {
    console.log("Promise was resolved.");
    console.log(request);
})
.catch(() => {
    console.log("Promise was rejected, Slow Network.");
    console.log(request);
})