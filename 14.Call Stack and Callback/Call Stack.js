function myName() {
    console.log("Inside Name Function."); // 3rd
    console.log("Chandan Chaudhary"); // 4th
}

function demo() {
    console.log("Calling Name Function"); // 2nd
    myName();
}

console.log("Calling Demo Function");  // 1st
demo();

console.log("It's done."); // 5th