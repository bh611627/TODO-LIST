function AddTask() {
  const taskInput = document.getElementById("Task-Input");
  const taskList = document.getElementById("task-unorder-list");
  
  // Blank Input or Empty Input Error
  if (!taskInput.value.trim()) {
    alert("Please Enter The Task");
    return;
  }

  // Get Time
  const DateTime = new Date().toLocaleString();

  // Add New Item List In Li 
  const li = document.createElement('li');
  li.textContent = taskInput.value;

  // Create a Time span 
  const timespan = document.createElement('span');
  timespan.id = 'date-time'
  timespan.textContent = DateTime;

  // Create A Re-Edit Button
  const Edit = document.createElement('a');
  Edit.classList.add('edit');
  Edit.textContent = 'EDIT';

  // Create A Delete Button
  const Delete = document.createElement('a');
  Delete.classList.add('delete');
  Delete.textContent = 'DELETE';

  // Append The Re-Edit, Delete, Time In List
  li.appendChild(timespan);
  li.appendChild(Edit);
  li.appendChild(Delete); 

  // Add list item to task list
  taskList.appendChild(li);

  // Clear The Input Value 
  taskInput.value = '';

  // Delete Event Listeners Function
  Delete.addEventListener("click", function() {
    taskList.removeChild(li);
  });

  // Re-Edit Event Listener Function
  Edit.addEventListener('click', function() {
    const currentTask = li.firstChild.textContent;
    const newTask = prompt('Enter the new task:', currentTask);
    
    if (newTask && newTask.trim() !== '') {
      li.firstChild.textContent = newTask.trim();
    }
  });
  
}
