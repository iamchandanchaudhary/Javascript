    console.dir(document);

    // Adding elements on Page

    // Add on Main Page
    let newP = document.createElement("p");

    console.dir(newP);
    newP.innerText = "Hello, I am new Line!";

    let body = document.querySelector("body");
    body.appendChild(newP);

    // Add in under any Element
    let uList = document.querySelector("ul");

    console.dir(uList);

    let newList = document.createElement("li");

    newList.innerText = "Hello, I am new Record!";
    uList.appendChild(newList);

    // Adding a Button
    let newButton = document.createElement("button");

    newButton.innerText = "Click me!";
    body.appendChild(newButton);

    // Append in the same element --> at the end
    let line3end = document.querySelector(".line3");

    line3end.append(" Hello, I'm new Value,");
    line3end.append(" Tell me Your Openion");

    // Append in the same element --> at the end
    let line2staxt = document.querySelector("#line2text");

    line2staxt.prepend("Hello, I'm new Value, ");
    line2staxt.append(" Tell me Your Openion");

    // Insert Adjecent Element 
    let line1Text = document.querySelector("#line1 p");

    let newButton2 = document.createElement("button");
    newButton2.innerText = "New Button!!!";

    line1Text.insertAdjacentElement("afterbegin", newButton2);
    // line1Text.insertAdjacentElement("beforebegin", newButton2);

    // line1Text.insertAdjacentElement("afterend", newButton2);
    // line1Text.insertAdjacentElement("beforeend", newButton2);