const fecha = new Date(),
      date = document.querySelector("#date"),
      month = document.querySelector("#month"),
      year = document.querySelector("#year"),
      day = document.querySelector("#day"),
      form = document.querySelector("#form");

date.textContent = fecha.getDate();
month.textContent = searchMonth(fecha.getMonth());
year.textContent = fecha.getFullYear();
day.textContent = searchDay(fecha.getDay());

class Task{
    constructor(toDo){
        this.toDo = toDo;
    }
}

class UI{
    addTask(task){
        const conteinerTasks = document.querySelector("#container-Tasks");
        const taskElement = document.createElement("div");

        taskElement.innerHTML = `
            <li>
                ${task.toDo} <i class="fa-solid fa-trash-can" id="delete-this"></i>
            </li>`;

        conteinerTasks.appendChild(taskElement);
        this.resetForm();
    }

    resetForm(){
        form.reset();
    }

    deleteElement(element){
        if(element.getAttribute("id") == "delete-this"){
            element.parentElement.remove();
        }
    }
}

form.addEventListener("submit", e =>{
    const toDo = document.querySelector("#new-task").value;

    const newTask = new Task(toDo);

    const ui = new UI();
    ui.addTask(newTask);

    e.preventDefault();
})

document.querySelector("#container-Tasks").addEventListener("click", e =>{
    const ui = new UI();
    ui.deleteElement(e.target);
})