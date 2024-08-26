    console.log("Add, Replace & Delete(Object Literals) :- \n");

    const student = {
        id: 1,
        name: "Chandan Chaudhary",
        age: 18,
        course: "Computer Application",
        roll: 230010
    };

    console.log("Student :", student);

    // Adding new Data (Marks)
    student.marks = 98.4;
    console.log("New Data(Marks) :", student.marks);
    console.log("Student :", student);

    // Replacing Data
    student.course = "BCA";
    console.log("Replaced Data :", student.course);
    console.log("Student :", student);

    // Replacing with Different Datatype
    student.marks = "O";
    console.log("Replacing with Different Datatype :", student.marks);
    console.log("Student :", student);

    student.marks = [98, 96, 93];
    console.log("Replacing with Array :", student.marks);
    console.log("Student :", student);

    delete student.marks;
    console.log("Student :", student);