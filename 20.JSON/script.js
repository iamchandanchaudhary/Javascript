function showInfo(data) {
    console.log(data);
    console.table(data);
}

fetch("data.json")
.then(response => response.json())
.then(data => showInfo(data));
