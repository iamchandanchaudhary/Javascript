let btn = document.querySelector("button");
let taskInp = document.querySelector("input");
let taskList = document.querySelector("ul");

btn.addEventListener("click", function() {

    // Adding Task
    let newli = document.createElement("li");
    newli.innerText = taskInp.value;
    taskList.appendChild(newli);

    // Reseting Input Box
    taskInp.value = "";

    // Adding Delete Button
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    newli.append(delBtn);

    // Manipulate delete button from Css
    delBtn.classList.add("del-btn"); 

    // Deleting the task
    delBtn.addEventListener("click", function() {
        let delTask = this.parentElement;
        // console.log(delTask);

        delTask.remove();
    })
})