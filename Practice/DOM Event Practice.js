let btn = document.querySelector("button");
let taskInp = document.querySelector("input");
let taskList = document.querySelector("ul");

btn.addEventListener("click", function() {

    let newli = document.createElement("li");
    newli.innerText = taskInp.value;

    taskList.appendChild(newli);
    
    // console.log(taskInp.value);
    taskInp.value = "";
})