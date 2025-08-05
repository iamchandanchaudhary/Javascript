function stringToNumber(input) {
    if(Number(input)) {
        return Number(input)
    } else {
        return "Not a number"
    }
    
}

function flipBoolean(input) {
    return !Boolean(input);
}

function whatAmI(input) {
    if(typeof(input) === "string") {
        return "I'm a string!"
    } else {
        return "I'm a number!"
    }
}

function isItTruthy(input) {
    if (input) {
    return "It's truthy!";
  } else {
    return "It's falsey!";
  }
}

console.log(
    stringToNumber("123"),
    flipBoolean("true"),
    whatAmI("Chandan"),
    isItTruthy(true)
);
