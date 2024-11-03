// function with no error
async function fun8() {
    return "Chandan";
}

fun8()
.then((result) => {
    console.log("Function was resolve.");
    console.log(result);
})
.catch((error) => {
    console.log("Function has error:", error);
})

// function with error
async function fun9() {
    throw "poor network";
    return "Chandan";
}

fun9()
    .then((result) => {
        console.log("Function was resolve.");
        console.log(result);
    })
    .catch((error) => {
        console.log("Function has error:", error);
    })