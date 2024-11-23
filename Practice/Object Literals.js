    console.log("Object Literal :- \n");

    // Adding data in Object Literals
    let students = {
        name: "Chandan Chaudhary",
        age: 18,
        gender: "Male"
    }

    console.log("Student Info : ", students);

    // Making Nested Data
    let studentsInfo = {
        Chandan: {
            age: 18,
            rollno: 230010,
            course: "BCA"
        },

        Aman: {
            age: 22,
            rollno: 230011,
            course: "BSCs"
        },

        Nikhil: {
            age: 23,
            rollno: 230012,
            course: "ITI"
        },

        Vivek: {
            age: 21,
            rollno: 230013,
            course: "B-Tech"
        },

        Deepanshu: {
            age: 22,
            rollno: 230014,
            course: "MCA"
        }
    };

    console.log("Student Information :", studentsInfo);

    const studentMarks = {
        Marks: {
            maths: [92, 89, 78, 83, 80],
            english: [88, 84, 56, 90, 91]
        }
    };

    console.log("Marks with Array : ", studentMarks);

    let students1 = {
        name: "Chandan Chaudhary",
        age: 18,
        gender: "Male"
    };

    // Adding, Replacing & Deleting Data from Object Literals
    students1.name = "Chandu Bhaii"; // Replacing Data
    students1.course = "BCA"; // Adding new Data

    console.log("Student Info : ", students1);

    delete students1.gender; // Deleting data
    console.log("Student Info : ", students1);


    // Adding, Replacing & Deleting data from Nested Loop
    studentsInfo.Nikhil.age = 30; // Replacing Data
    studentsInfo.Nikhil.gender = "Male"; // Adding data
    delete studentsInfo.Nikhil.rollno; // Deleting Data

    console.log("Nikhil Information :", studentsInfo.Nikhil);