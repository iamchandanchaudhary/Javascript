    let form1 = document.querySelector(".form1");

    form1.addEventListener("submit", function() {
        alert("Form Submitted");
    })

    // Prevent Page after submit
    let form2 = document.querySelector(".form2");

    form2.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Form Submitted");
    })