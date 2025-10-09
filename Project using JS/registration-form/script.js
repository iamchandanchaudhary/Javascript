let name = document.querySelector("#name");
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let password = document.querySelector("#password");
let confPassword = document.querySelector("#confirm-password");

let form = document.querySelector(".form");

form.addEventListener("submit", () => {

    if(phone.value.length > 10 || phone.value.length < 10) {
        alert("Please enter valid number");
        return false;
    }
    
    else if(isNaN(phone.value)) {
        alert("Only Numbers are allowed in Phone Number");
        return false;
    }

    else if(password.value != confPassword.value) {
        alert("Please enter same password");
        return false;
    }

    else {
        return true;
    }
})
