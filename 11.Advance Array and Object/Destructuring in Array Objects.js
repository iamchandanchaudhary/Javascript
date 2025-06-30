    console.log("Destructuring in Objects :- \n");

    const student = {
        name: "Chandan",
        age: 18,
        year: "2nd",
        semester: "3rd",
        subjects: ["Java", "DBMS", "Cyber Security", "JS"],
        course: "BCA",
        rollno: 230010   
    };

    // => Without Destructuring
    // let name = student.name;
    // let age = student.age;

    // Destructuring the objects
    let {name, age} = student;

    console.log("Name :", name);
    console.log("Age :", age);

    let { semester: sem} = student;
    console.log("Semester :", sem);

    let {city = "Basti"} = student;
    console.log("City :", city);

    console.log("Main Object :", student);