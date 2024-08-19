    console.log("Concatination of Array :- \n");

    // Concat the Two array --> with the Help of Cancat Method
    let class5 = ["Arun", "Aman", "Vijay", "Dipanker", "Satyam"];
    let class6 = ["Ajay", "Harshit", "Ayush", "Sandeep", "Crish"];

    console.log("Student of Class 5 :", class5);
    console.log("Student of Class 6 :", class6);

    let combineClass = class5.concat(class6);
    console.log("Combine Class :", combineClass);

    // Concat two different type of Array
    let number = [2, 6, 1, 7, 5];
    let color = ["Red", "Green", "Blue"];

    console.log("\nNumber :", number);
    console.log("Color :", color);

    let combineArray = number.concat(color);
    console.log("Combine Array :", combineArray);

    let combineArray2 = color.concat(number);
    console.log("Combine Array2 :", combineArray2);

    // Node :- it does not affect the Original Array

