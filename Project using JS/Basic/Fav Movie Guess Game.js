    console.log("Fav Movie Guess Game :- \n");
    console.log("Pess 'exit' if you don't.");

    let favMovie = "Rolex";
    let guess = prompt("Guess Movie Name :");

    for(let i = 0; ; i++) {
        // guess = prompt("Guess Movie Name :");

        if(guess == favMovie) {
            console.log("Movie Name :", favMovie);
            console.log("You Win :) ");
            break;
        }
        else if(guess == 'exit') {
            console.log("Movie Name :", favMovie);
            console.log("Game Exited....");
            break;
        }
        else if(guess != favMovie) {
            console.log("You Enterd :", guess);
            guess = prompt("Wrong! Guess again Movie Name :");
        }
    }

        console.log("Thank You :)");