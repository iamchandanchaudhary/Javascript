    console.log("Find indexOf(Array) :- \n");

    let color = ["Red", "Green", "Blue", "Yellow"];
    console.log("Colors :", color);

    // Finding Index of Colors 
    console.log("Index of Red Color :", color.indexOf("Red"));
    console.log("Index of Blue Color :", color.indexOf("Blue"));
    console.log("Index of Black Color :", color.indexOf("Black"));
    console.log("Index of red Color :", color.indexOf("red"));

    /* Searching the Element --> 
    return True if found 
    return False if Not found */
    
    console.log("\nSearch Element in Array :- \n");

    console.log("Red Present :", color.includes("Red"));
    console.log("red Present :", color.includes("red"));
    console.log("Orange Present :", color.includes("Orange"));