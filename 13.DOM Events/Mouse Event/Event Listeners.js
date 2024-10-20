    
    // Multiple Operation
    let btn = document.querySelector(".row1-button");
    let allBtn = document.querySelectorAll(".row1-button");

    for(btn of allBtn) {
        btn.addEventListener("click", sayName);
        btn.addEventListener("click", sayCollege);
        // btn.addEventListener("dblclick", doubleClick);
    }

    function sayName() {
        alert("Name: Chandan Chaudhary");
    }

    function sayCollege() {
        alert("College: Integeral University");
    }

    // Double Tap Operation
    let btn2 = document.querySelector(".row2-button");
    let allBtn2 = document.querySelectorAll(".row2-button");

    for(btn2 of allBtn2) {
        btn2.addEventListener("dblclick", doubleClick);
    }

    function doubleClick() {
        alert("Please Enter one Time!");
    }