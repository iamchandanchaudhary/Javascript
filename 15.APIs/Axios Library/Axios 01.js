let url = "https://catfact.ninja/fact";

async function getFact() {
    try {
        let result = await axios.get(url);
    
        console.log(result);
        console.log(result.data);
        console.log(result.data.fact);
    }
    catch(err) {
        console.log("Error -", err);
    }
}

getFact();