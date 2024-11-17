let url = "https://catfact.ninja/fact";

let factP = document.querySelector(".fact-p");
let gBtn = document.querySelector(".generate-btn");
let ul = document.querySelector("ul");

// fetch(url)
// .then((response) => {
//     // console.log(response.json());
//     return response.json();
// })
// .then( (data) => {
//     console.log(data);
//     console.log(data.fact);

//     // Adding Fact in Paragraph
//     // factP.innerText = data.fact;

//     gBtn.addEventListener("click", () => {
//         // factP.innerText = data.fact;
//         let newli = document.createElement("li");
//         newli.innerText = data.fact;

//         ul.appendChild(newli);
//         return fetch(url);
//     });
// })
// .catch( (err) => {
//     console.log("Error -", err);
// })

// console.log("Chandan Chaudhary");

// let url = "https://catfact.ninja/fact";

// async function getFact() {
//     try {
//         let result = await fetch(url);
//         let data = await result.json();

//         console.log(data);
//         console.log(data.fact);

//         // return data.fact;
//     }
//     catch(err) {
//         console.log("Error -", err)
//     }

// }

gBtn.addEventListener("click", () => {
    // getFact();
    
    async function getFact() {
        let result = await fetch(url);
        let data = await result.json();

        // console.log(data);
        // console.log(data.fact);

        let newli = document.createElement("li");
        // let data2 = getFact();
        newli.innerText = data.fact;

        ul.appendChild(newli);
    }

    getFact();
})

// let data = getFact();
// console.log(data);

// getFact();