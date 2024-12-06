let url = "https://catfact.ninja/fact"; 

async function getFact() {
    let result = await fetch(url);
    let data = await result.json();

    console.log(data);
    console.log(data.fact);

}

getFact();