console.dir(document);
// Inline Style have always higher priorty then any other

// Class List
let listofClass = document.querySelector(".pictures");

// listofClass.classList;
console.dir(listofClass.classList);

// Adding new Class
listofClass.classList.add("sub-images");
listofClass.classList.add("trophy-images");
listofClass.classList.add("small-images");

// Removing a Class
listofClass.classList.remove("trophy-images");
// listofClass.classList.remove("pictures");

// Checking of Class --> Present or Not
console.log("Does 'pictures' class Present :");
console.dir(listofClass.classList.contains("pictures"));

console.log("Does 'trophy-images' class Present :");
console.dir(listofClass.classList.contains("trophy-images"));

// Add class from Css Page
let listforH1 = document.querySelector("h1");

console.dir(listforH1.classList);

listforH1.classList.add("color");
listforH1.classList.add("underline");

// Toggle Class --> If there is a class then it will remove it or If there is not a class then it will add it
let obj5 = document.querySelector("h1");
console.dir(obj5.classList.toggle("underline"));
console.dir(obj5.classList.toggle("underline"));