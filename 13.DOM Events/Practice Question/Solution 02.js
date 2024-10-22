let btn = document.querySelector("#btn1");

// one click
btn.addEventListener("click", function() {
    this.style.background = "Red";
    this.style.color = "white";

})

// double click
btn.addEventListener("dblclick", function() {
    this.style.background = "Blue";
    this.style.color = "white";

})

// mouse enter
btn.addEventListener("mouseenter", function() {
    this.style.background = "yellow";
    this.style.color = "black";

})