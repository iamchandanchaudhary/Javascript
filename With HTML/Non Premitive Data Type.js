let student = {
    name : "Chandan Chaudhary",
    roll_no : 23001028,
    cgpa : 7.7,
    age : 18,
    isPass : true,
};

console.log(student);
console.log("Student Information :- ");
console.log("Name : " + student.name);
console.log("Roll no. : " + student.roll_no);
console.log("CGPA : " + student.cgpa);
console.log("Age : " + student["age"]);
console.log("isPass : " + true);