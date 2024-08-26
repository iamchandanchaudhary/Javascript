    console.log("Method Chaining(String) :- \n");

    // 1st Method
    let name = "     Chandan Chaudhary     ";
    console.log("Normal Name : " + name);

    let newName = name.trim();
    console.log("After Trim : " + newName);

    newName = newName.toUpperCase();
    console.log("After Uppercase : " + newName);

    // 2nd Method
    let str = "    Namaste   ";
    console.log("\nNormal Print : " + str);

    let newStr = str.trim().toUpperCase();
    console.log("After Modify : " + newStr);