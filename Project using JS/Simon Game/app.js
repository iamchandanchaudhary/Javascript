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

// Flash Box Bg
function boxflash(btn) {
    btn.classList.add("flash-box");

    setTimeout(
        function() {
            btn.classList.remove("flash-box");
        }, 250);
}

function levelUp() {
    level++;
    statusline.innerText = `Level ${level}`;

    // Pick Random Box
    let randomIdx = Math.floor(Math.random() * 4);
    let randomColor = btns[randomIdx];

    let randomBox = document.querySelector(`.${randomColor}`);

    console.log(randomColor);

    boxflash(randomBox);
}

// Level 3
function boxPresed() {
    console.log("Box Pressed");
}

let allBox = document.querySelectorAll(".box");

for(box of allBox) {
    box.addEventListener("click", boxPresed);
}