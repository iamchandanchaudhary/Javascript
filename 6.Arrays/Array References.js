    console.log("Array References :- \n");

    let number1 = [1];
    let number2 = [1];

    // To know more info about it read --> 'Array References'
    console.log("Comparision 1 :", number1 === number2);
    console.log("Comparision 2 :", number1 == number2);

    let letter1 = ['a'];
    let letter2 = ['a'];

    console.log("Comparision 3 :", letter1 === letter2);
    console.log("Comparision 4 :", letter1 == letter2);

    // It possible when you copy the Array
    let list = ['a', 'b'];
    let listCopy = list;

    console.log("\nComparision 5 :", list === listCopy);
    console.log("Comparision 6 :", list == listCopy);

    console.log("List :", list);
    console.log("Copy List :", listCopy);

    // if you change one array it will affect on both
    list.push('c');
    console.log("\nNew List :", list);
    console.log("New Copy List :", listCopy);

    listCopy.pop();
    console.log("\nNew List :", list);
    console.log("New Copy List :", listCopy);


    // To cancle this affect need to change the value of one 'CopyArray'
    listCopy = ['a', 'b', 'x'];
    console.log("\nList :", list);
    console.log("Modified Copy List :", listCopy);

    console.log("\nComparision 7 :", list === listCopy);
    console.log("Comparision 8 :", list == listCopy);

    list.push('y');
    console.log("\nModified List :", list);
    console.log("Modified Copy List :", listCopy);
