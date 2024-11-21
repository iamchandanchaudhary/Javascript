let url = "https://catfact.ninja/fact";

// try {
    async function getFact() {
        let result = await fetch(url);
        let data = await result.json();
        
        console.log(result);
        console.log(data.fact);
    }
// } catch(err) {
//     console.log("Error -", err);
// }

getFact();

// console.log(fetch(url));