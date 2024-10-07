    console.dir(document);

    // Navigating Sibling Element
    let list = document.querySelector("li");

    list.nextElementSibling.style.color = "white";

    console.dir(list.previousElementSibling);
    list.previousElementSibling.style.color = "purple";

    let mainList = document.querySelector("ul");
    console.dir(mainList.children);

    console.dir(mainList.children[2].nextElementSibling);

    mainList.children[2].nextElementSibling.style.color = "darkred";