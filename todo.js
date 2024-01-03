function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    const taskText = taskInput.value;

    if (taskText.trim() !== '') {
        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.onclick = function () {
            taskList.removeChild(newTask);
        };
        newTask.appendChild(deleteButton);

        taskList.appendChild(newTask);
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
}