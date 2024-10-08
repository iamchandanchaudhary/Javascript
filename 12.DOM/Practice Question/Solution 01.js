    console.dir(document);

    // Create a Search box and Button

    // Adding Search box
    let newSearch = document.createElement("input");

    newSearch.placeholder = "Search Here";
    console.dir(newSearch);

    let body = document.querySelector("body");

    body.appendChild(newSearch);

    // Adding button
    let newButton = document.createElement("button");

    newButton.innerText = "Click me!";

    // let body1 = querySelector(".line2");
    body.appendChild(newButton);