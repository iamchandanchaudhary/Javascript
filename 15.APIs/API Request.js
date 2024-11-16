let url = "https://catfact.ninja/fact";

// console.log(fetch(url)); // ==> Visibal in Network Tab

/* Not Visible in Console Window */
// fetch(url)
// .then((response) => {
//     console.log(response);
// })
// .catch( (err) => {
//     console.log(err);
// })

/* Visibal in Promise Tab */
// fetch(url)
// .then((response) => {
//     // console.log(response);
//     console.log(response.json());
// })
// .catch( (err) => {
//     console.log("Error -", err);
// })

fetch(url)
.then((response) => {
    // console.log(response.json());
    return response.json();
})
.then( (data) => {
    console.log(data);
    console.log(data.fact);
})
.catch( (err) => {
    console.log("Error -", err);
})

console.log("Chandan Chaudhary");