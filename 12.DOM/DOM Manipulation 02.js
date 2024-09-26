    console.log(document);

    console.dir(document);

    console.dir(document.all);

    console.dir(document.all[7]);
    // console.log("Original Value :", document.all[7]);

    console.dir(document.all[7].innerText);
    
    // Manipulate the Heading
    document.all[7].innerText = "Thala for a Reason";

    console.log(document.all[7]);