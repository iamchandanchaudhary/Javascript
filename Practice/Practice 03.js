let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    setTimeout( () => {
        h1.style.color = color;
    }, delay);
}

changeColor("red", 1000);
changeColor("blue", 2000);
changeColor("green", 3000);



// setTimeout( () => {
//     h1.style.color = "red";
// }, 1000);

// setTimeout( () => {
//     h1.style.color = "blue";
// }, 2000);

// setTimeout( () => {
//     h1.style.color = "green";
// }, 3000);