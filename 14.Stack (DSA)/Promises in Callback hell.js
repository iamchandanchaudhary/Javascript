function savetoDB(data, success, failure) {
    let internet = Math.floor(Math.random() * 10 + 1);

    // console.log(internet);
    if(internet > 4) {
        success();
    } else {
        failure();
    }
}

savetoDB(
    // 1st Data
    "Chandan Chaudhary", 
    () => {
    console.log("Success: Data was saved.");
    savetoDB(

        // 2nd Data
        "Aman Chaudhary",
       () => {
            console.log("Success: Data2 was saved.");
            savetoDB(

                // 3rd Data
                "Vipin Chaudhary",
                () => {
                    console.log("Success: Data3 was saved.");
                }, 
                () => {
                    console.log("Failure: Data3 was not saved, Due to weak network.");
            });
       }, 
       () => {
            console.log("Failure: Data2 was not saved, Due to weak network.");
       }
    );
}, 
    () => {
    console.log("Failure: Data1 was not saved, Due to weak network.");
}
);