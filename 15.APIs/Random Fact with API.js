let url = "https://catfact.ninja/fact";

let factP = document.querySelector(".fact-p");
let gBtn = document.querySelector(".generate-btn");
let ul = document.querySelector("ul");

fetch(url)
.then((response) => {
    // console.log(response.json());
    return response.json();
})
.then( (data) => {
    console.log(data);
    console.log(data.fact);

    // Adding Fact in Paragraph
    // factP.innerText = data.fact;

    gBtn.addEventListener("click", () => {
        let newli = document.createElement("li");
        newli.innerText = data.fact;

        ul.appendChild(newli);
    });
})
.catch( (err) => {
    console.log("Error -", err);
})

console.log("Chandan Chaudhary");