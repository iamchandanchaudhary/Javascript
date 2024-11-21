let url = "https://catfact.ninja/fact";

// try {
//     async function getFact() {
//         let data = await fetch.json(url);
        
//         console.log(data);
//     }
// } catch(err) {
//     console.log("Error -", err);
// }

console.log(fetch(url));