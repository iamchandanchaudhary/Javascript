console.dir(document);

let line2 = document.querySelector("#line2text");

// console.log(line2.innerText);

// Attribute manipulation
console.dir(line2.getAttribute("id"));

line2.setAttribute("id", "line1");

console.dir(line2.getAttribute("id"));

let image3 = document.querySelector("#pic-2");

console.dir(image3.getAttribute("src"));

image3.setAttribute("src", "Ms Dhoni.jpg");