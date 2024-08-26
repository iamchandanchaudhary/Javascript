    console.log("Add, Replace and Delete in Array of Object Literals :- \n");

    const students = [
        {
            name: "Chaudu Chaudhary",
            age: 19,
            grade: "A+"
        },
        {
            name: "Ashok Pathak",
            age: 26,
            grade: "A"
        },
        {
            name: "Avinash Verma",
            age: 28,
            grade: "B"
        },
        {
            name: "Pranjal Mishra",
            age: 32,
            grade: "A",
        }
    ];

    console.log("Students Info :", students);

    // Replacing the Data
    students[2].age = 35;
    console.log("\nReplaced Age of Index[2] :", students[2].age);
    console.log("Students Info :", students); 

    students[3].grade = 'A+';
    console.log("Replacing Grade of Index[3] :", students[3].grade);
    console.log("Students Info :", students); 

    // Deleting the Data
    delete students[1].age;
    console.log("Deleting age index[1] :", students); 

    // Adding data 
    students[1].marks = 82;
    console.log("\nAdding Marks in index[1] :", students[1].marks);
    console.log("Students Info :", students);