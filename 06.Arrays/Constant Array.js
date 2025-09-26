    console.log("Constant Array :- \n");

    const list = [1, 2, 3, 4, 5];

    console.log("List :", list);

    /* Possible things on 'Constant Array' -->   */
    console.log("\nPossible Things on Constant :");
    list.push(6);
    console.log("List :", list);

    list.pop();
    console.log("List :", list);

    list.shift();
    console.log("List :", list);

    list.reverse();
    console.log("List :", list);

    list.unshift(8);
    console.log("List :", list);

    list.sort();
    console.log("List :", list);

    // Every operation of 'Array Method' can perform on it


    /* Impossible things on 'Constant Array' --> */

    let number = [23, 21, 12, 32, 28];

    list = [66, 54, 56];
    list = number;