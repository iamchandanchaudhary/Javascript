    console.dir(document);

    // Style only give Inline css Value --> it does not know External Css
    let pageList = document.querySelectorAll("li");

    console.dir(pageList.style);
    

    for(let i = 0; i < pageList.length; i++) {
        pageList[i].style.color = "purple";
    }

    let background = document.querySelector("body");

    background.style.backgroundColor = "Pink"; // Inline Css

    
    