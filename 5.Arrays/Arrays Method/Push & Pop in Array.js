    console.log("Pudh & Pop(Array) :- \n");

    let numbers = [32, 12, 34, 87, 54, 33];

    console.log("Original Number :", numbers);

    // Push --> add at last
    numbers.push(99);
    console.log("After Push Number :", numbers);
    // console.log("Added Number :", addNum);

    // Pop --> remove from last
    let blocked = numbers.pop(99);
    console.log("After Pop Number :", numbers);
    console.log("Removed Number :", blocked);