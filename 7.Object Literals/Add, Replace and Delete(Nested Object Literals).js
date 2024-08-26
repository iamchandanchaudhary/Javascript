console.log("Nested Object Literals :- \n");

    const students = {
        Chandan: {
            grade: 'O',
            course: "BCA",
            age: 18
        },
        Aman: {
            grade: 'A',
            course: "ITI",
            age: 19
        },
        Bipin: {
            grade: 'A',
            course: "CCC",
            age: 18
        },
        Akash: {
            grade: 'B',
            course: "MCA",
            age: 21
        }
    };

    console.log("Students Info :", students);

    // Adding new Data
    students.Vishal = {
        grade: 'A',
        course: "MSC",
        age: 25
    }

    console.log("\nNew Student(Vishal) :", students.Vishal);
    console.log("Students Info :", students);


    // Replacing with Another Data
    students.Vishal.course = "LLB";
    console.log("\nCourse Changed(Vishal) :", students.Vishal.course);
    console.log("Students Info :", students);

    // Deleting Data
    delete students.Vishal.age;
    // console.log("\nDeleted Age from Vishal :", students.Vishal.age);
    console.log("Students Info :", students);