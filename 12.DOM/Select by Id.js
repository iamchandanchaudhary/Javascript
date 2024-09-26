    console.log(document);

    console.dir(document);

    console.dir(document.all);

    console.dir(document.all[7]);
    // console.log("Original Value :", document.all[7]);

    console.dir(document.all[7].innerText);

    // Manipulate the Heading
    document.all[7].innerText = "Thala for a Reason";

    console.log(document.all[7]);

    // Manipulate the 2nd line
    // Select Element By Id
    console.dir(document.getElementById("line2text"));

    let obj1 = document.getElementById("line2text");

    console.dir(obj1);

    obj1.innerText = "Mahendra Singh Dhoni is an Indian professional cricketer";
    // document.getElementById("line2text").innerText = "Mahendra Singh Dhoni is an Indian professional cricketer";