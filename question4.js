let tasks = []; //array to store tasks

// Function to add a task uses .push() to insert a new task object into the tasks array
function addTask(id, name, description) {
    tasks.push({ id, name, description });
    console.log('Task added successfully');
}

// Function to view all tasks uses .forEach() to loop through the tasks array and log each task to the console
function viewTask() {
    tasks.forEach(task => {
        console.log(`ID: ${task.id}, Name: ${task.name}, Description: ${task.description}`);
    });
}

// Function to delete a task uses .filter() to remove the task with the specified id from the tasks array
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    console.log('Task deleted successfully');
}

// Function to update a task uses .find() to locate the task with the specified id and update its name and description
function updateTask(id, name, description) {
    const task = tasks.find(task => task.id === id);
    task.name = name;
    task.description = description;
    console.log('Task updated successfully');
}

// Test the functions
addTask(1, 'Task 1', 'This is task 1');
addTask(2, 'Task 2', 'This is task 2');
addTask(3, 'Task 3', 'This is task 3');
viewTask();
deleteTask(2);
viewTask();
updateTask(3, 'Task 3', 'This is task 3 updated');
viewTask();