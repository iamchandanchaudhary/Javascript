    // Selecting Single
    let btn = document.querySelector(".row1-button");

    // btn.onclick = function () {
    //     console.log("Hello Chandan");
    // }

    function saySomething() {
        alert("Post was Liked!");
    }

    btn.onclick = saySomething;

    // Selecting All
    let btn2 = document.querySelector(".row2-button");
    let allBtn = document.querySelectorAll(".row2-button");

    function saySomething() {
        alert("Post was Liked!");
    }

    // for(let i = 0; i < allBtn.length; i++) {
    //     btn2.onclick = saySomething;
    // }

    for(btn2 of allBtn) {
        btn2.onclick = saySomething;
        // btn2.onmouseenter = function () {
        //     console.log("Key Enterd");
        // }
    }