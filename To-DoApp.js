let inp = document.querySelector("#task");
let btn = document.querySelector("#btn");
let taskList = document.querySelector("#todoList");

btn.addEventListener("click",(event) =>{
    let taskText = inp.value.trim();

    if (taskText === ""){
        alert("Task cannot be empty!");
        return;
    }

    let newTask = document.createElement("li");

    let taskContent = document.createTextNode(taskText);

    let delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.classList.add("delete");

    delBtn.style.marginLeft = "10px";
    delBtn.style.cursor = "pointer";

    // delBtn.addEventListener("click", () =>{
    //     newTask.remove();
    // })
    
    newTask.appendChild(taskContent);
    newTask.appendChild(delBtn);
    taskList.appendChild(newTask);

    inp.value="";    
})

taskList.addEventListener("click",function(event){
    if(event.target.nodeName === "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
}) 