    console.log("Nested Condition :- \n");

    let marks = 92;

    if(marks >= 33) {
        console.log("Status : Pass");

        if(marks >= 90) {
            console.log("Grade : O");
        } else {
            console.log("Grade : A");
        }
    }
    else {
        console.log("Fail");
    }