    let btn = document.querySelector(".color-btn");
    let boxP = document.querySelector(".color-name");
    let boxBg = document.querySelector(".color-box");

   
    btn.addEventListener("click", getRandomColor);
    btn.addEventListener("click", function () {
        // let boxP = document.querySelector(".color-name");
        let randomColor = getRandomColor();
        boxP.innerText = randomColor;

        // let boxBg = document.querySelector(".color-box");
        boxBg.style.background = randomColor;
    });

    // Generate color
    function getRandomColor() {
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);

        let color = `rgb(${red}, ${green}, ${blue})`;
        // console.log(color);
        return color;
    }
    
    // Reset Option
    let resetBtn = document.querySelector(".reset-btn");

    resetBtn.addEventListener("click", function() {
        boxP.innerText = "This is Your new Color";
        boxBg.style.background = "white";

    })