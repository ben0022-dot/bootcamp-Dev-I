const tasks = [];
const form = document.getElementById('todo-form');
const listContainer = document.querySelector('.listTasks');
const input = document.getElementById('task-input');

form.addEventListener('submit', addTask);

function addTask(event) {
    event.preventDefault(); // Stop the form from refreshing the page

    const text = input.value.trim();
    if (text === "") return; // Validation: Don't add empty strings

    // Bonus I: Create task object
    const taskObj = {
        task_id: tasks.length,
        text: text,
        done: false
    };

    tasks.push(taskObj);
    renderTask(taskObj);
    input.value = ""; // Clear input field
}

function renderTask(task) {
    // 1. Create main container for the task row
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-item');
    taskDiv.setAttribute('data-task-id', task.task_id);

    // 2. Create "X" button (Font Awesome)
    const deleteBtn = document.createElement('i');
    deleteBtn.classList.add('fas', 'fa-times');
    // Bonus II: Link delete function
    deleteBtn.addEventListener('click', () => deleteTask(task.task_id));

    // 3. Create checkbox
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    // Bonus I: Link toggle function
    checkbox.addEventListener('change', () => doneTask(task.task_id));

    // 4. Create label
    const label = document.createElement('label');
    label.classList.add('task-text');
    label.innerText = task.text;

    // 5. Append all to the DOM
    taskDiv.appendChild(deleteBtn);
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(label);
    listContainer.appendChild(taskDiv);
}

// Bonus I: Toggle 'done' status
function doneTask(id) {
    // Find task in array and update boolean
    const taskIndex = tasks.findIndex(t => t.task_id === id);
    if (taskIndex !== -1) {
        tasks[taskIndex].done = !tasks[taskIndex].done;
    }

    // Update DOM visual
    const taskElement = document.querySelector(`[data-task-id="${id}"] .task-text`);
    taskElement.classList.toggle('is-done');
}

// Bonus II: Delete task
function deleteTask(id) {
    // 1. Remove from the tasks array
    const index = tasks.findIndex(t => t.task_id === id);
    if (index !== -1) tasks.splice(index, 1);

    // 2. Remove the specific element from the DOM
    const taskRow = document.querySelector(`[data-task-id="${id}"]`);
    taskRow.remove();
}