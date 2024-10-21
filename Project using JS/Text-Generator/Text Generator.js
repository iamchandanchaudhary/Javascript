let inp = document.querySelector("input");

let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");
let p3 = document.querySelector("#p3");
let p4 = document.querySelector("#p4");
let p5 = document.querySelector("#p5");
let p6 = document.querySelector("#p6");
let p7 = document.querySelector("#p7");
let p8 = document.querySelector("#p8");
let p9 = document.querySelector("#p9");
let p10 = document.querySelector("#p10");

inp.addEventListener("input", function() {
    p1.innerText = inp.value;
    p2.innerText = inp.value;
    p3.innerText = inp.value;
    p4.innerText = inp.value;
    p5.innerText = inp.value;
    p6.innerText = inp.value;
    p7.innerText = inp.value;
    p8.innerText = inp.value;
    p9.innerText = inp.value;
    p10.innerText = inp.value;
})