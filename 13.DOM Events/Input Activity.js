let inp = document.querySelector("#inp-box");
let para1 = document.querySelector("#para1");

inp.addEventListener("input", function() {
    console.log(inp.value);

    para1.innerText = inp.value;
});