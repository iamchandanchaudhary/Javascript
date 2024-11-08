// JSON to JS
let jsonData = '{"fact":"A cat lover is called an Ailurophilia (Greek: cat+lover).","length":57}';

console.log(jsonData);

let validData = JSON.parse(jsonData);
console.log(validData);

console.log("Fact :", validData.fact);
console.log("Length of Fact :", validData.length);

// JS to JSON
let student = {
    name: "Chandan",
    age: 18
}

let jsonChange = JSON.stringify(student);

console.log("JSON Value :", jsonChange);