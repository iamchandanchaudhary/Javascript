let h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange) {
    setTimeout( () => {
        h1.style.color = color;
        if(nextColorChange) nextColorChange();
    }, delay);
}

// Callback nesting -> Calback hell
changeColor("red", 1000, () => {
    changeColor("blue", 1000, () => {
        changeColor("green", 1000, () => {
            changeColor("orange", 1000, () => {
                changeColor("DeepPink", 1000);
            });
        });
    });
});


// changeColor("blue", 2000);
// changeColor("green", 3000);