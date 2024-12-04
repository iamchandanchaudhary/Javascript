let url = "https://catfact.ninja/fact";

async function getFact() {
    try {
        let result = await fetch(url);
        let data = result.json();

        console.log(data);
    } 
    catch(err) {

    }
}

getFact();