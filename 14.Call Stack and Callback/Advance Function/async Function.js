// 1st Function
async function fun1() {

}

console.log(fun1());

// 2nd Function
async function fun2() {
    let name = "Chandan";
    // console.log(a);
    return name;
}

console.log(fun2());
// fun2();

// 3rd Function
async function fun3() {
    // let name = "Chandan";
    return "Chaudhary";
}

console.log(fun3());

// 4th Function --> Error Function give Rejected Promise
async function fun4() {
    console.log(Chandan);
    return "Duniya";
}

console.log(fun4());

// 5th Function --> throw an Error
async function fun5() {
    throw "Make some error"; 
    return "Duniya";
}

console.log(fun5());

// 6th Function --> async on arrow function
let name = async () => {
    return "Chandu";
}

console.log(name());

// 7th Function --> async on arrow function
let nothing = async () => {
    // return "Chandu";
}

console.log(nothing());