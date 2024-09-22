    console.log("Array Map on Object(Array Method) :- \n");

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

    console.log("Objects in Array :", arr);

    // Student Data from Array 
    console.log("\nStudent New Age :");
    let newAge = arr.map( (student) => {
        console.log(student.age + 2);
    });