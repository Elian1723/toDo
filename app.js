const addTask = document.querySelector("#add-task"),
      inputTask = document.querySelector("#new-task"),
      containerTasks = document.querySelector("#container-Tasks"),
      fecha = new Date(),
      date = document.querySelector("#date"),
      month = document.querySelector("#month"),
      year = document.querySelector("#year"),
      day = document.querySelector("#day");

date.textContent = fecha.getDate();
month.textContent = searchMonth(fecha.getMonth());
year.textContent = fecha.getFullYear();
day.textContent = searchDay(fecha.getDay());


let newTask, task, icon, arrayIcon;

inputTask.addEventListener("input", e =>{
    newTask = e.target.value;
});

const deleteNode = () =>{
    arrayIcon = document.querySelectorAll(".fa-trash-can");
};

addTask.addEventListener("click", e =>{
    task = document.createElement("li");
    task.textContent = newTask;
    
    icon = document.createElement("i");
    icon.classList.add("fa-solid");
    icon.classList.add("fa-trash-can");
    
    task.appendChild(icon);
    
    containerTasks.appendChild(task);

    deleteNode();
    arrayIcon.forEach(node =>{
        node.addEventListener("click", () =>{
            node.parentNode.remove();
        })
    });
    e.preventDefault();
});

const deleteTask = document.querySelector("#delete-task");

if(screen.width > 540){
    deleteTask.textContent = "Delete";
} else{
    deleteTask.innerHTML = `<i class="fa-solid fa-trash"></i>`;
}

deleteTask.addEventListener("click", () =>{
    deleteNode();
    arrayIcon.forEach( node =>{
        node.parentNode.remove();
    });
});