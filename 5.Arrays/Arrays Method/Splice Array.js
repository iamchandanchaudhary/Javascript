    console.log("Splice Array :- \n");

    let color = ["green", "yellow", "blue", "orange", "red", "indigo", "pink"];
    console.log("Original Color :", color);

    // Cutting the array
    console.log("\nSplice 1 :", color.splice(5));
    console.log("Now Color :", color);

    // Cutting 2 element at place 2
    console.log("\nSplice 2 :", color.splice(2, 2));
    console.log("Now Color :", color);

    // Add 3 color on 0 index by removing 0 index
    console.log("\nSplice 3 :", color.splice(0, 1, "Dark Black", "Gray", "Purpal"));
    console.log("Now Color :", color);

    // Add 3 color on 0 index without Removing Anything
    console.log("\nSplice 4 :", color.splice(0, 0, "Silvar", "Dark Red"));
    console.log("Now Color :", color);