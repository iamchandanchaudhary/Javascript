    let gameSeq = [];
    let userSeq = [];

    let btns = ["box1", "box2", "box3", "box4"];

    let level = 0;
    let started = false;

    let body = document.querySelector("body");
    let statusline = document.querySelector("#status-line");

    // Level 1 --> Start the game
    body.addEventListener("keypress", function() {

        if(started == false) {
            started = true;
            console.log("Game started");
        } 

        levelUp();
    })

    // Level 2 --> Blink Random Box & Update Level

    // Flash Box Bg when game flash
    function boxflash(btn) {
        btn.classList.add("flash-box");

        setTimeout(
            function() {
                btn.classList.remove("flash-box");
            }, 250);
    }

    // Flash Box when user press
    function userflash(btn) {
        btn.classList.add("userPress");

        setTimeout(
            function() {
                btn.classList.remove("userPress");
            }, 250);
    }

    function levelUp() {
        level++;
        statusline.innerText = `Level ${level}`;

        // Pick Random Box
        let randomIdx = Math.floor(Math.random() * 4);
        let randomColor = btns[randomIdx];

        let randomBox = document.querySelector(`.${randomColor}`);

        // console.log(randomColor);

        // Level 4 --> Store the sequence in Array
        gameSeq.push(randomColor);
        console.log(gameSeq);

        boxflash(randomBox);
    }

    // Level 3 --> Button Press Function
    function boxPresed() {
        // console.log(this);
        let btn = this;
        userflash(this);
        console.log(btn);

        userflash = btn.getAttribute("id");
        userSeq.push(userflash);
        console.log(userSeq);
    }

    let allBox = document.querySelectorAll(".box");

    for(box of allBox) {
        box.addEventListener("click", boxPresed);
    }