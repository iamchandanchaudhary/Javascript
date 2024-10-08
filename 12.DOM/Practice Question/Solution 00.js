    console.log(document);

    // Adding 'P' tag with 'red' color
    let newP = document.createElement("p");

    newP.innerText = "Hey I'm Red!";
    newP.style.color = "Red";

    let body = document.querySelector("body");

    body.appendChild(newP);

    // Adding 'H3' tag with 'Blue' color
    let newH = document.createElement("h3");

    newH.innerText = "I'm a Blue H3!";
    newH.style.color = "Blue";

    body.appendChild(newH);

    // Creating a Div 
    let newDiv = document.createElement("div");

    newDiv.style.border = "2px solid black";
    newDiv.style.height = "200px";
    // newDiv.style.width = "300px";
    newDiv.style.background = "pink";

    // newDiv.classList.add("newStyle");

    body.appendChild(newDiv);

    // Adding a 'H1' under the Div
    let newSubH = document.createElement("h1");
    newSubH.innerText = "I'm in a Div";

    newDiv.append(newSubH);

    // Adding 'p' under the Div
    let newSubP = document.createElement("p");
    newSubP.innerText = "Me to!"

    newDiv.append(newSubP);
