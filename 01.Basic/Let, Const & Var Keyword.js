console.log("Uses of Let, Const & Var Keywords :- \n");

// Let Keyword //

let a = 5; // can not able to re-define only you can change the value

console.log("A : " + a);

a += 12;

console.log("2nd Sum : " +  a);

a *= 2;
console.log("3rd Sum : " + a);

let b = 50;
console.log("B : " + b);

let sum = a + b;
console.log("4th Sum : " + sum);

sum = sum + 10;
console.log("5th Sum : " + sum);

// Const Keyword //

const number3 = 54;
console.log("\nNumber 3 : " + number3);

/* You can not change the value of Constent Variable */

// number3 = 21;
// console.log("Number 3 : " + number3);

const pi = 3.14;

let radius = 4;

let area = pi * radius**2;
console.log("Area : " + area);

// Var Keyword //

var number5 = 32;
var number6 = 21;

var number6 = 5; // Var can be re-define

var sum5 = number5 + number6;

console.log("\nSum : " + sum5);