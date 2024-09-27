    // Select by Tag

    console.dir(document);

    console.log(document.getElementsByTagName("li"));

    let liTag = document.getElementsByTagName("li");

    // liTag[0].type = "circle";

    for(let i = 0; i < liTag.length; i++) {
        liTag[i].type = "circle";
        console.log(`List ${i} type Changed.`);
    }