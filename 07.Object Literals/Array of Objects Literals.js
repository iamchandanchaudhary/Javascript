    console.log("Array of Objects Literals :- \n");

    const students = [
        {
            name: "Chandan Chaudhary",
            age: 18,
            grade: "A+"
        },
        {
            name: "Ananaya Pathak",
            age: 21,
            grade: "B"
        },
        {
            name: "Rahul Verma",
            age: 28,
            grade: "A"
        },
        {
            name: "Dipak Mishra",
            age: 22,
            grade: "B",
        }
    ];

    console.log("Students Info :", students);

    // Accessing the Array Index
    console.log("\nStudent at 0th Index :", students[0]);
    console.log("Student at 2nd Index :", students[2]);

    // Accessing the Sub Information
    console.log("\nStudent Name at 0th Index :", students[0].name);
    console.log("Student Name at 2nd Index :", students[2].name);
    console.log("Student Age at 1st Index :", students[1].age);
    console.log("Student grade at 3rd Index :", students[3].grade);