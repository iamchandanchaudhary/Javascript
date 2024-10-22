let box = document.querySelector(".box");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

box.addEventListener("click", function() {
    console.log("Box was Clicked");
})

ul.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("ul was Clicked");
})

for(li of lis) {
    li.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("li was Clicked");
    })
}
