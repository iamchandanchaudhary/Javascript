    console.log("For Each on Object(Array Method) :- \n");

    let arr =[ 
    {
        name : "Chandan",
        age : 18
    }, 
    {
        name : "Aman",
        age : 20
    }, 
    {
        name : "Vikash",
        age : 24
    }];

    console.log("Object in Array :", arr);

    // Student Data from Array 
    console.log("\nStudent Data :");
    arr.forEach( (student) => {
        console.log(student);
    });

    // Student Age from Array
    console.log("\nStudent Age :");
    arr.forEach( (student) => {
        console.log(student.age);
    });

    // Student Name from Array
    console.log("\nStudent Name :");
    arr.forEach( (student) => {
        console.log(student.name);
    });