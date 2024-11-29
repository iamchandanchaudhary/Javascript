console.log("For of Loop:- \n");

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for(n of number) {
    console.log(n);
}

let array = ["Chandan", "Bipin", "Kajal", "Suraj"];

console.log(array);
for(arr of array) {
    console.log(arr);
}

// on String
let name = "Chandan Chaudhary";

console.log(name);
for(n of name) {
    console.log(n);
}

// Nested For-of Loop
let student = [["Chandan", "Sanju", "Raj"], ["Akash", "Chetan", "Mukesh"]];

console.log(student);

console.log("\nStudent List in Nested Loop:-");
for(stu of student) {
    for(s of stu) {
        console.log(s);
    }
    console.log(" ");
}