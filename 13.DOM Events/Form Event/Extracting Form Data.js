let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form Submitted");

    let name = document.querySelector("#name");
    console.dir(name);
    console.log("Name:", name.value);

    let pass = form.elements[1];
    console.log("Passward:", pass.value);

    console.log(`Hii ${name.value}, your Passward is set to ${pass.value}`);

    console.dir(form);
    console.dir(this.elements); // form.elements
})