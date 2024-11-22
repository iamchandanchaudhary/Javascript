let url = "https://catfact.ninja/fact";


    async function getFact() {
        try {

            let result = await fetch(url);
            let data = await result.json();
            
            console.log(result);
            console.log(data.fact);
        }
        catch(err) {
        console.log("Error -", err);
    }
}

getFact();

// console.log(fetch(url));