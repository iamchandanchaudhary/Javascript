let url = "https://catfact.ninja/fact"; 

async function getFact() {
    try {
        let result = await fetch(url);
        let data = await result.json();

        console.log(data);
        console.log(data.fact);

    } 
    catch(err) {
        console.log("Error -", err);
    }
}

getFact();

// Next Concept
let student = {
    name: "Chandan",
    age: 18,
    rollno: 230010
}

console.log(student);

// JS to JSON
let value = JSON.stringify(student);
console.log(value);