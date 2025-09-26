    console.log("Get Values(Object Literals) :- \n");

    const student = {
        name: "Chandan",
        age: 18,
        course: "BCA",
        marks: 98.2,
        roll: 230010,
        hobbie: ["Programming", "Exploring things", "Workout"]
    }

    console.log("Student Data :", student);

    // Get Values
    console.log("\nGat Value :-");

    // Type 1
    console.log("Student Name :", student["name"]);
    console.log("Student Marks :", student["marks"]);

    // Type 2
    console.log("Student Name :", student.name);
    console.log("Student Age :", student.age);
    console.log("Student Hobbie :", student.hobbie);
    console.log("Student Hobbie #1 :", student.hobbie[0]);
    console.log("Student Hobbie #2 :", student.hobbie[1]);
    console.log("Student Hobbie #3 :", student.hobbie[2]);

