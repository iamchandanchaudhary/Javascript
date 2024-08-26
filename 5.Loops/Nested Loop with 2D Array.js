    console.log("Nested Loop with 2D Array :- \n");

    let heros = [ ["Iron Man", "Spider Man", "Thor"], ["Wonder Women", "Flash", "Superman"] ];

    for(let i = 0; i < heros.length; i++) {
        console.log("List :", i);

        for(let j = 0; j < heros[i].length; j++) {
            console.log(heros[i][j]);
            // console.log("");
        }
    }