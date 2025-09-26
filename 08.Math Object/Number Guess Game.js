    console.log("Random Number Guess Game :- \n");
    
    let randomNum = Math.random() * 100;

    randomNum = Math.floor(randomNum);

    // console.log("Random Number :", randomNum);

    let guess = prompt("Enter Number :");

    while(true) {
        if(guess == randomNum) {
            console.log("Wow :) You Win!");
            console.log("Number is :", randomNum);
            break;
        } 
        else if(guess < randomNum) {
            console.log("Your number is Small");
            guess = prompt("Your number is Small, Enter Number :");
        }
        else if(guess > randomNum) {
            console.log("Your number is Big");
            guess = prompt("Your number is Big, Enter Number :");
        }
    }