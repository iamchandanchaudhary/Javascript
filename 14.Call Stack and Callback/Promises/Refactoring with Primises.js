function savetoDB(data) {
    return new Promise((resolve, reject) => {
        let internet = Math.floor(Math.random() * 10 + 1);
        if(internet > 4) {
            resolve("Success: Data was Saved.");
        } else {
            reject("Failure: Data was not Saved.");
        }
    });
}

console.log(savetoDB("Chandan Chaudhary"));

// savetoDB("Chandan Chaudhary",
//     () => {
//         console.log("Success: Data1 was Saved.");
//         savetoDB("Ayush Chaudhary",
//             () => {
//                 console.log("Success: Data2 was Saved.");
//             },
//             () => {
//                 console.log("Failure: Data2 was not Saved,Slow Network.")
//             }
//         );
//     },
//     () => {
//         console.log("Failure: Data1 was not Saved,Slow Network.");
//     }
// )