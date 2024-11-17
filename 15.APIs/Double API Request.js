let url = "https://catfact.ninja/fact";

fetch(url)
.then((response) => {
    // console.log(response.json());
    return response.json();
})
.then( (data) => {
    // console.log(data);
    console.log("Data :", data.fact);

    return fetch(url);
})
.then( (response) => {
    return response.json();
})
.then( (data2) => {
    console.log("Data 2 :", data2.fact);
})
.catch( (err) => {
    console.log("Error -", err);
})

// console.log("Chandan Chaudhary");