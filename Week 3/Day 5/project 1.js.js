const tasks = [];
const form = document.getElementById('todo-form');
const listContainer = document.querySelector('.listTasks');
const input = document.getElementById('task-input');

form.addEventListener('submit', addTask);

function addTask(event) {
    event.preventDefault(); // Prevent page refresh

    const text = input.value;
    if (text === "") return; // Don't add empty tasks

    // Bonus I: Object structure
    const taskObj = {
        task_id: tasks.length,
        text: text,
        done: false
    };

    tasks.push(taskObj);
    renderTask(taskObj);
    input.value = ""; // Clear input
}

function renderTask(task) {
    // Create main div
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-item');
    taskDiv.setAttribute('data-task-id', task.task_id);

    // Create delete button (Font Awesome X)
    const deleteBtn = document.createElement('i');
    deleteBtn.classList.add('fas', 'fa-times');
    deleteBtn.addEventListener('click', () => deleteTask(task.task_id));

    // Create checkbox
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.addEventListener('change', () => doneTask(task.task_id));

    // Create label
    const label = document.createElement('label');
    label.classList.add('task-text');
    label.innerText = task.text;

    // Append everything
    taskDiv.appendChild(deleteBtn);
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(label);
    listContainer.appendChild(taskDiv);
}

// Bonus I: Mark as done
function doneTask(id) {
    const task = tasks.find(t => t.task_id === id);
    task.done = !task.done; // Toggle boolean

    const taskElement = document.querySelector(`[data-task-id="${id}"] .task-text`);
    taskElement.classList.toggle('is-done');
}

// Bonus II: Delete task
function deleteTask(id) {
    // 1. Remove from array
    const index = tasks.findIndex(t => t.task_id === id);
    if (index !== -1) tasks.splice(index, 1);

    // 2. Remove from DOM
    const taskElement = document.querySelector(`[data-task-id="${id}"]`);
    taskElement.remove();
}