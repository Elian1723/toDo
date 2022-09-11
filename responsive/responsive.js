let deleteTask = document.querySelector("#delete-task");

if(screen.width > 540){
    deleteTask.textContent = "Delete";
} else{
    deleteTask.innerHTML = `<i class="fa-solid fa-trash"></i>`;
}