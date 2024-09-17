    let allStr = ["Hello, ", "from ", "Chandan", "!"];

    function concat(allStr) {
        let result = "";

    for(let i = 0; i < allStr.length; i++) {
        result += allStr[i];
    }

    return result;
}
    

    console.log("Concatination of String in an Array by using Function :- \n");

    let result = concat(allStr);
    console.log("All String :", result);