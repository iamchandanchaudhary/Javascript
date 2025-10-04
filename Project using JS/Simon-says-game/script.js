    let gameSeq = [];
    let userSeq = [];

    let btns = ["box1", "box2", "box3", "box4"];

    let level = 0;
    let started = false;

    let body = document.querySelector("body");
    let statusline = document.querySelector(".status-line");
    let startBtn = document.querySelector(".start-btn");

    // Level 1 --> Start the game
    startBtn.addEventListener("click", function() {

        if(started == false) {
            started = true;
            console.log("Game started");
        } 

        levelUp();
    })

    // Level 2 --> Blink Random Box & Update Level

    // Flash Box Bg when game start
    function boxflash(btn) {
        btn.classList.add("flash-box");

        setTimeout(
            function() {
                btn.classList.remove("flash-box");
            }, 250);
    }

    // Flash Box when user press --> level 3
    function userflash(btn) {
        btn.classList.add("userPress");

        setTimeout(
            function() {
                btn.classList.remove("userPress");
            }, 250);
    } 

    function levelUp() {
        userSeq = [];

        level++;
        statusline.innerText = `Level ${level}`;

        // Pick Random Box
        let randomIdx = Math.floor(Math.random() * 4);
        let randomColor = btns[randomIdx];

        let randomBox = document.querySelector(`.${randomColor}`);

        // console.log(randomColor);

        // Level 4 --> Store the sequence of Random box in Array
        gameSeq.push(randomColor);
        console.log(gameSeq);

        boxflash(randomBox);
    }

    // level 4 --> Matching Sequence
    function checkAns(idx) {
        console.log("Current Level : ", level);

        // let idx = level - 1;

        if(userSeq[idx] === gameSeq[idx]) {
            // console.log("Same Sequence!");
            // Level 4 (Advance) -->
            if(userSeq.length == gameSeq.length) {
                setTimeout(levelUp(), 1000);
            }
        }
        else {
            statusline.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Click start button to Restart the Game.`;

            // Level 6 --> Display Score & Change Warning Bg
            // document.querySelector(".game-box").style.backgroundColor = "red";
            // setTimeout(function() {
            //     document.querySelector(".game-box").style.backgroundColor = "white";
            // }, 350);

            resetGame();
        }
    }

    // Level 3 --> Button Press Function
    function boxPresed() {
        // console.log(this);
        let btn = this;
        userflash(btn);
        // console.log(btn);

        // Level 4 --> Storing the sequence of clicked box in array
        userColor = btn.getAttribute("id");
        userSeq.push(userColor);
        // console.log(userSeq);

        checkAns(userSeq.length - 1);
    }

    let allBox = document.querySelectorAll(".box");

    for(box of allBox) {
        box.addEventListener("click", boxPresed);
    }

    // Level 5 --> Reset the game if Game Over
    function resetGame() {
        started = false;
        gameSeq = [];
        userSeq = [];
        level = 0;
    }