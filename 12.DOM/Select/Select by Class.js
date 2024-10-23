    // Manipulate the 
    // Select Element By Class
    console.dir(document.getElementsByClassName("image-main"));
    console.dir(document.getElementsByClassName("image-main")[0]);

    let subImage = document.getElementsByClassName("image-main");

    console.dir(subImage);

    console.log("All Images :");
    for(let i = 0; i < subImage.length; i++) {
        subImage[i].src = "Ms Dhoni.jpg";
        console.dir(subImage[i]);
    }

    // console.dir(subImage[0].src);
    // subImage[0].src = "Ms Dhoni.jpg";
    // console.log(`Image 1 address has been Changed`);
