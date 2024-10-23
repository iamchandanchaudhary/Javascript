    console.dir(document);

    // it querySelector only single and first element
    // using Element Selector
    console.dir(document.querySelector("h1"));
    let heading1 = document.querySelector("h1");

    heading1.innerText = "Thala for a Reason";

    // Using Element Selector
    let para1 = document.querySelector("p");
    para1.innerText = "'Dhoniiiii finishes off in style. A magnificent strike into the crowd. India lift the World Cup after 28 years.'"; 

    // Using Class Selector
    console.dir(document.querySelector(".image-main"));
    let mainImg1 = document.querySelector(".image-main");

    mainImg1.src = "ms dhoni 3.jpg";

    // Using Pseudo selector
    let mainImg2 = document.querySelector(".pictures #pic-2");
    mainImg2.src = "ms dhoni 2.jpg"; 

    // querySelectorAll select all the element releted to this
    console.dir(document.querySelectorAll("li"));

    let allList = document.querySelectorAll("li");

    for(let i = 0; i < allList.length; i++) {
        allList[i].type = "circle";
    }

    console.dir(document.querySelectorAll("p"));

