    console.log("Spread in Array Literals :- \n");

    let arr = [1, 2, 3, 4, 5];

    let newArr = [...arr];

    console.log("New Array :", newArr);
    console.log("New Array :", ...newArr);

    let name = [..."Chandan"];

    console.log("Name :", name);

    let student = ["Aman"];

    console.log("Student :", ...student);