    // keydown
    let inp1 = document.querySelector("#inp1");

    inp1.addEventListener("keydown", function() {
        console.log(event);
        console.log("Key was Presed");
    })

    // Keyup
    let inp2 = document.querySelector("#inp2");

    inp2.addEventListener("keyup", function() {
        console.log(event);
        console.log("Key was Released");
    })

    //
    let inp3 = document.querySelector("#inp3");

    inp3.addEventListener("keydown", function(event) {
        console.log(event);
        console.log("Key :", event.key);
        console.log("Code :", event.code);
        console.log("Key was Presed");
    })

    let inp4 = document.querySelector("#inp4");

    inp4.addEventListener("keydown", function(event) {
        // console.log(event);
        console.log(`${event.key}: key was Presed`);
    })

    // Character Moving Game
    let inp5 = document.querySelector("#inp5");

    inp5.addEventListener("keydown", function(event) {
        // ArrowUp, ArrowDown, ArrowLeft, ArrowRight

        if(event.code == "ArrowUp") {
            console.log("Character move Fordword");
        }
        else if(event.code == "ArrowDown") {
            console.log("Character move Backword");
        }
        else if(event.code == "ArrowLeft") {
            console.log("Character move Left");
        }
        else if(event.code == "ArrowRight") {
            console.log("Character move Right");
        }
    });