    // Add on Tags
    let heading = document.querySelector("h1");

    heading.addEventListener("mouseenter", function () {
        console.log("Mouse on Heading");
    })

    let para1 = document.querySelector("#para1");

    para1.addEventListener("click", function () {
        console.log("You clicked Paragraph");
    })

    let box = document.querySelector(".box1");

    box.addEventListener("mouseenter", function () {
        console.log("You are under the Box!");
    })