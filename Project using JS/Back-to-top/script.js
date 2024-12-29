let backtoTop = document.querySelector(".backtop");

backtoTop.addEventListener("click", () => {
    window.scrollTo(0, 0);
})

let move = document.querySelector(".move");

move.addEventListener("click", () => {
    window.scrollTo(0, 700);
})