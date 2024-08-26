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

    // Personal Property
    console.log("Chandan Info :", students.Chandan);
    console.log("Aman Info :", students.Aman);

    // Sub-Property
    console.log("Chandan age :", students.Chandan.age);
    console.log("Aman Course :", students.Aman.course);
    console.log("Akash Grade :", students.Akash.grade);