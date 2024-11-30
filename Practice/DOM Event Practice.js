let btn = document.querySelector("button");
let taskInp = document.querySelector("input");
let taskList = document.querySelector("ul");

btn.addEventListener("click", function() {

    let newli = document.createElement("li");
    newli.innerText = taskInp.value;

    taskList.appendChild(newli);
    
    taskInp.value = "";
    // console.log(taskInp.value);
})