    function diceRoll() {
        let dice = Math.random() * 6;

        dice = Math.floor(dice);
        dice = dice + 1;

        console.log("Dice Number :", dice);
    }

    console.log("Roll Dice Game with Function :- \n");

    diceRoll();