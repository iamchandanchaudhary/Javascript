let url = "https://catfact.ninja/fact";

let factP = document.querySelector(".fact-p");
let gBtn = document.querySelector(".generate-btn");
let ul = document.querySelector("ul");

let clearBtn = document.querySelector(".clear-btn");

gBtn.addEventListener("click", async () => {
    
    await getFact();
})

async function getFact() {
    try {
        let result = await fetch(url);
        let data = await result.json();
    
        // console.log(data);
        // console.log(data.fact);
    
        let newli = document.createElement("li");
        // let data2 = getFact();
        newli.innerText = data.fact;
    
        ul.appendChild(newli);

        // Reset Btn
        clearBtn.addEventListener("click", async () => {
            newli.remove();
        });

    }
    catch(err) {
        console.log("Error -", err);
        console.log("Fact not Found");
    }
}