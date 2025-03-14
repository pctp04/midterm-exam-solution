let tasks = [];

function addTask(id, name, description) {
    tasks.push({ id, name, description });
    console.log('Task added successfully');
}

function viewTask() {
    tasks.forEach(task => {
        console.log(`ID: ${task.id}, Name: ${task.name}, Description: ${task.description}`);
    });
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    console.log('Task deleted successfully');
}

function updateTask(id, name, description) {
    const task = tasks.find(task => task.id === id);
    task.name = name;
    task.description = description;
    console.log('Task updated successfully');
}

addTask(1, 'Task 1', 'This is task 1');
addTask(2, 'Task 2', 'This is task 2');
addTask(3, 'Task 3', 'This is task 3');
viewTask();
deleteTask(2);
viewTask();
updateTask(3, 'Task 3', 'This is task 3 updated');
viewTask();