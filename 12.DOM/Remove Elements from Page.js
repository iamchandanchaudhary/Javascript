    console.dir(document);

    // Remove Element from the Page

    // Remove Child Element
    let listAll = document.querySelector(".trophy-list");

    let body = document.querySelector("body");

    body.removeChild(listAll);

    // Remove Element
    let line2 = document.querySelector("#line2text");

    line2.remove();