    // Generate Random Number
    let randomBtn = document.querySelector(".number-btn");
    let numberType = document.querySelector(".number-Type");
    let changeNum = document.querySelector(".number-random");

    randomBtn.addEventListener("click", function() {
        changeNum.innerText = getRandomNumber();

        // let 

        if(getRandomNumber() % 2 == 0) {
            numberType.innerText = "Even Number";
        } else {
            numberType.innerText = "Odd Number";
        }
        
    });

    function getRandomNumber() {
        let random = Math.floor(Math.random() * 100);
        return random;
    }

    // Reset Option
    let resetBtn = document.querySelector(".reset-btn");

    resetBtn.addEventListener("click", function() {
        changeNum.innerText = "--";
        numberType.innerText = "--";
    })