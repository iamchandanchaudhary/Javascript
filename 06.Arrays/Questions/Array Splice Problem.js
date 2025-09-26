    console.log("Array Splice Problem :- \n");

    let list = ["january", "july", "march", "august"];
    console.log("Start :", list);

    list.splice(0, 1);
    // console.log("Mid :", list);

    list.splice(1, 0, "june");
    console.log("End :", list);