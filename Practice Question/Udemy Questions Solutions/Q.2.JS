// **** DO NOT CHANGE the values *****
const a = 18;
const b = 24;

// Addition of two values
function add() {
    return a+b;
}

// Subtract small value from larger one
function subtract() {
    return b-a;
}

function multiply() {
    return a*b;
}

// Divide larger value by small
function divide() {
    return b/a;
}

// Increase value of a by 1
function increment() {
    let result = a;
    result += 1;
    return result;
}

// Decrease value of b by 1
function decrement() {
    let result = b;
    result -= 1;
    return result;
}

// Divide larger value by small to find the reminder
function reminder() {
    return b%a;
}
