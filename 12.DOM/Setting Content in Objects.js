    // inner Text
    console.dir(document.querySelector(".line3"));

    let para3 = document.querySelector(".line3");

    console.log("innerText :");
    console.dir(para3.innerText);

    // innerHTML
    console.log("\ninnerHTML :");
    console.dir(para3.innerHTML);

    // innerContent
    console.log("\ntextContent :");
    console.dir(para3.textContent);

    // manipulation
    para3.innerText = "Hello, I am MS Dhoni";
    console.log("\nChanged Text :", para3.innerText);

    para3.innerHTML = "Hello, I am <b>MS Dhoni</b>";
    console.log("\nChanged Thing :", para3.innerHTML);

    para3.innerHTML =  `<u>${para3.innerText}</u>`;
    console.log("\nChanged Thing :", para3.innerHTML);