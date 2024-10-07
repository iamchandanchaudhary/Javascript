    console.dir(document);

    // Navigating Parent Element --> Always one
    console.log("Navigating Parent Elements :- ");

    let list = document.querySelector("li");

    console.dir(list.parentElement);

    let heading = document.querySelector("h1");

    console.dir(heading.parentElement);

    heading.parentElement.style.background = "hotpink";

    let fromId = document.querySelector("#line1");

    console.dir(fromId.parentElement);

    // Navigating Children Elements
    console.log("\nNavigating Children Elements :- ");

    let listMain = document.querySelector("ul");
    console.dir(listMain.children);

    let body = document.querySelector("body");
    console.dir(body.children);

    console.log("Total Elements in body :", body.childElementCount);

    body.children[2].style.color = "white";
    body.children[2].style.background = "purple";
