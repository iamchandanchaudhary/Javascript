    let form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
    })

    let inp = document.querySelector("#name");

    inp.addEventListener("change", function() {
        console.log("\nChange Event");
        console.log("Final Value:", inp.value);
    });

    inp.addEventListener("input", function() {
        console.log("Input Event");
        console.log("Current Value:", inp.value);
    });