let url = "https://catfact.ninja/fact"; 

async function getFact() {
    try {
        let result = await fetch(url);
        let data = await result.json();
    
        console.log("JSON to JS :", data);
        console.log(data.fact);

        // JS to JSON
        let value = JSON.stringify(data);
        console.log("JS to JSON :", value);
    }
    catch(err) {
        console.log("Error -", err);
    }

}

getFact();