let url = "https://catfact.ninja/fact";

async function getFact() {
    try {
        let result = await axios.get(url);

        console.log(result);
        console.log(result.data);
        console.log("Fact :", result.data.fact);

        // Fact 2
        let result2 = await axios.get(url);
        console.log("Fact :", result2.data.fact);

    }
    catch(err) {
        console.log("Error -", err);
    }
}

getFact();