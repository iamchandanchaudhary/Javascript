    console.log("Add, Remove & Replace in between (Splice Array) :- \n");

    let color = ["green", "yellow", "blue", "orange", "red"];
    console.log("Original Color :", color);

    // Add in b/w
    console.log("\nAdd Color in b/w :", color.splice(2, 0, "Purpal"));
    console.log("Now Color :", color);

    // Remove in b/w
    console.log("\nRemove Color in b/w :", color.splice(3, 1));
    console.log("Now Color :", color);

    // Replace in b/w
    console.log("\nReplace Color in b/w :", color.splice(1, 1, "Gray"));
    console.log("Now Color :", color);
