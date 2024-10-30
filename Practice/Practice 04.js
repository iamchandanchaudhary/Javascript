function saveToDB(data) {

    return new Promise((resolve, reject) => {
        let internet = Math.floor(Math.random() * 10 + 1);

        if(internet < 4) {
            resolve("Data Saved.");
        } 
        else {
            reject("Data was not Saved, Slow Network.");
        }
    });   
}

saveToDB("Chandan Chaudhary")
.then(() => {
    console.log("Data1 was Saved.");

    return saveToDB("Parshuram");
})
.then(() => {
    console.log("Data1 was Saved.");
})
.catch(() => {
    console.log("Failed, Data was not Saved.");
})