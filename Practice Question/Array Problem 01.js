    console.log("Array Problem :- \n");

    let month = ["January", "July", "March", "August"];
    console.log("Start Month :", month);

    let remove1 = month.shift();
    let remove2 = month.shift();
    // console.log("Start Month :", month);

    month.unshift("June");
    month.unshift(remove2);
    console.log("Final Month :", month);