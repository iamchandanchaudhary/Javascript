let url = "https://icanhazdadjoke.com/";

async function getJoke() {
    try {
        const config = { headers: { Accept: "application/json"} };
        let header = await axios.get(url, config);
        console.log(header.data);
        console.log(header.data.joke);
    }
    catch(err) {
        console.log("Error -", err);
    }
}

getJoke();