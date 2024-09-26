    console.log("Spread (Object Literals) :- \n");

    const student = {
        name: "Chandan Chaudhary",
        age: 18,
    };

    console.log("Student Data :", student);

    // Copy Object Literal Data into Different Object 
    // Adding new Value in the copied Data
    const newCopy = {...student, id: 11};
    console.log("Copied Data :", newCopy);

    // Spreading name Object Value
    console.log(...student.name);

    console.log("New Added Data :", newCopy.id);

    const newCopy2 = {...newCopy, country: "India"};
    console.log("2nd Copied Data :", newCopy2);

    // Spread Value that will be Added
    console.log("New Data Added :", newCopy2.country);
    console.log("Spread New Data :", ...newCopy2.country);

    let arr = [11, 12, 13, 14, 15];

    console.log("\nArray :", arr);
    const obj1 = { ...arr };

    console.log("Object :", obj1);
    // console.log("Object :", obj1.keys);

    let obj2 = { ..."Chandan"};

    console.log(obj2);