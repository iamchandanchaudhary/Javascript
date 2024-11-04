let h1 = document.querySelector("h1");

function changeColor(textColor, delay) {
    return new Promise((resolve, reject) => {
            setTimeout( () => {
                h1.style.color = textColor;
                console.log(`Color change to ${textColor}`);
                
                resolve("color changed");
            }, delay);
    })
}

async function demo() {
    await changeColor("green", 1000);
    await changeColor("red", 1000);
    await changeColor("blue", 1000);
    await changeColor("orange", 1000);
    await changeColor("deeppink", 1000);
    await changeColor("gray", 1000);
    await changeColor("purple", 1000);

    console.log("Done!");
    return "done";
}

demo();