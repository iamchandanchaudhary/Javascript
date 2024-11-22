let url = "https://catfact.ninja/fact";

async function getFact() {
    try {
        let data = await axios.get(url);

        console.log(data);
    }
    catch(err) {
        console.log("Error -", err);
    }
}

getFact();