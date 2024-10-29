let h1 = document.querySelector("h1");
// h1.style.color = "Red";

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("Color Changed");
        }, delay);
    })
}

changeColor("Red", 1000)
.then(() => {
    console.log("Red Color");

    return changeColor("Green", 1000);
})

.then(() => {
    console.log("Green Color");

    return changeColor("Blue", 1000);
})

.then(() => {
    console.log("Blue Color");

    return changeColor("Deeppink", 1000);
})

.then(() => {
    console.log("Deeppink Color");

    return changeColor("Purple", 1000);
})

.then(() => {
    console.log("Purple Color");

    return changeColor("Orange", 5000);
})

.then(() => {
    console.log("Orange Color");
    console.log(changeColor());

})