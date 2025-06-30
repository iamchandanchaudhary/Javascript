    console.log("Destructuring in Array :- \n");

    let names = ["Chandan", "Aman", "Krishna", "Vijay"];

    // let winer = names[0];
    // let runnerup = names[1];
    // let secRunnerup = names[2];

    let [winer, runnerup, ...others] = names;

    console.log("Original List :", names);

    // Printing the Destructuring variables of Array
    console.log("Winer :", winer);
    console.log("Runner-up :", runnerup);

    console.log("Other Player :", others);
