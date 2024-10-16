
    // for Single Element
    let btn1 = document.querySelector(".button1");

    btn1.addEventListener("click", function() {
        console.log(this);
    })

    let btn2 = document.querySelector(".button2");

    btn2.addEventListener("click", function() {
        console.log(btn2);
    })

    let btn3 = document.querySelector(".button3");

    btn3.addEventListener("click", function() {
        console.log(this.innerText);
    })

    let btn4 = document.querySelector(".button4");

    btn4.addEventListener("click", function() {
        console.log(this.innerText);
        this.style.background = "black";
        this.style.color = "white";
    })

    // for multiple Elements
    let heading = document.querySelector(".heading");
    let para1 = document.querySelector(".para1");
    let btn5 = document.querySelector(".button5");
    let btn6 = document.querySelector(".button6");

    function changeColor() {
        console.log(this.innerText);
        this.style.background = "black";
        this.style.color = "white";
    }

    heading.addEventListener("click", changeColor);
    para1.addEventListener("click", changeColor);
    btn5.addEventListener("click", changeColor);
    btn6.addEventListener("click", changeColor);

