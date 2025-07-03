// Get the todo list and form elements
const todoList = document.getElementById('todo-items');
const todoForm = document.getElementById('add-todo-form');
const todoInput = document.getElementById('todo-input');

// Initialize an empty array to store the todo items
let todoItems = [];

// Function to add a new todo item
function addTodoItem(item) {
    // Create a new list item element
    const listItem = document.createElement('li');
    listItem.textContent = item;
    listItem.classList.add('fade-in');

    // Add an event listener to mark the item as completed
    listItem.addEventListener('click', () => {
        listItem.classList.toggle('completed');
    });

    // Add the list item to the todo list
    todoList.appendChild(listItem);

    // Add the item to the todo items array
    todoItems.push(item);
}

// Function to remove a todo item
function removeTodoItem(index) {
    // Remove the list item from the todo list
    todoList.removeChild(todoList.children[index]);

    // Remove the item from the todo items array
    todoItems.splice(index, 1);
}

// Add an event listener to the form to add a new todo item
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the input value
    const inputValue = todoInput.value.trim();

    // Check if the input value is not empty
    if (inputValue !== '') {
        // Add the new todo item
        addTodoItem(inputValue);

        // Clear the input field
        todoInput.value = '';
    }
});

// Add an event listener to the todo list to remove a todo item
todoList.addEventListener('contextmenu', (e) => {
    e.preventDefault();

    // Get the index of the list item
    const index = Array.prototype.indexOf.call(todoList.children, e.target);

    // Remove the todo item
    removeTodoItem(index);
});