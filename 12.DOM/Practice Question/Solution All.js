    /* Solution 01 */
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

    body.appendChild(newButton);

    /* Solution 02 */
    // Changing placeholder
    newSearch.placeholder = "username";

    // seting 'id' to Button
    newButton.setAttribute("id", "btn");
    console.dir(newButton.getAttribute("id"));

    /* Solution 03 */
    // Changing the 'Button' Property
    let btn = document.querySelector("#btn");

    btn.style.background = "blue";
    btn.style.color = "white";

    /* Solution 04 */
    // Creating new Heading
    let newH = document.createElement("h1");

    newH.innerText = "DOM Practice";
    newH.classList.add("heading");

    // let body = document.createElement()
    body.appendChild(newH);

    /* Solution 05 */
    // Creating new 'P' tag
    let newP = document.createElement("p");

    newP.innerHTML = "Apna College <b>Delta</b> Practice";

    body.appendChild(newP);