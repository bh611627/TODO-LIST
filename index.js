function AddTask() {
    const taskInput = document.getElementById("Task-Input");
    const taskList = document.getElementById("task-unorder-list");
    
    // Get current date and time
    const dateTime = new Date().toLocaleString();
  
    // Create new list item with task and time
    const li = document.createElement("li");
    li.innerText = taskInput.value;
    
    // Create span element for the timestamp
    const timestamp = document.createElement("span");
    timestamp.textContent = dateTime;
    
    // Append timestamp to list item
    li.appendChild(timestamp);
    
    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.innerText = "x";
    
    // Add delete button to list item
    li.appendChild(deleteButton);
    
    // Add list item to task list
    taskList.appendChild(li);
    
    // Clear task input
    taskInput.value = "";
    
    // Attach click event listener to delete button
    deleteButton.addEventListener("click", function() {
      taskList.removeChild(li);
    });
  }