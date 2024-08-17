    console.log("Shift & Unshift(Array) :- \n");

    let students = ["Aman", "Chandan", "Bipin", "Nikhil"];
    console.log("Original Student List :", students);

    // shift --> Remove 1st Element
    let blocked = students.shift();
    console.log("After Remove 1st Student :", students);
    console.log("Removed Student :", blocked);

    // Unshift --> Add at 1st place
    students.unshift("Akhil");
    console.log("After Add 1st Student :", students);
    // console.log("Added Student :", addStu);