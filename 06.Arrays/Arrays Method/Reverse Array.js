    console.log("Reverse Array :- \n");

    // Reverse array with the help of reverse method
    let number = [2, 8, 5, 0, 1, 4];
    console.log("Numbers :", number);

    let reverseNum = number.reverse();
    console.log("Reverse of Array :", reverseNum);

    // 2nd Reverse
    let students = ["Aman", "Ram", "Sayam", "Mohan"];
    console.log("\nNormal List of Students :", students);

    let reverseStu = students.reverse();
    console.log("Reverse list of Students :", reverseStu);

    
    // Node :- it will affect the Original Array
    console.log("\nOriginal List of Students :", students);

    // So for back in old form need to Reverse Again
    students.reverse();
    console.log("Original List of Students :", students);