
let tasks = [];

function addTask() {
 
  const taskInput = document.getElementById("inputTask");
  const task = taskInput.value;

  
  tasks.push(task);

  
  displayTasks();

  
  taskInput.value = "";
}

function displayTasks() {
  
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  
  tasks.forEach(function(task, index) {
    const li = document.createElement("li");
    li.innerText = task;

    
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.onclick = function() {
      deleteTask(index);
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}

function deleteTask(index) {

  tasks.splice(index, 1);

  
  displayTasks();
}