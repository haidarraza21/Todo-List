// Initialize the todoList from localStorage or use an empty array if no data is found
let todoList = JSON.parse(localStorage.getItem('todos')) || [];

// Display the existing items from localStorage on page load
displayItems();

function addTodo() {
    let inputElements = document.querySelector('#todo_input');
    let todoItem = inputElements.value;
    let dateElements = document.querySelector('#todo_date');
    let todoDate = dateElements.value;

    if (todoItem && todoDate) { // Only add if both fields are filled
        todoList.push({ item: todoItem, dueDate: todoDate });

        // Save updated todoList to localStorage
        localStorage.setItem('todos', JSON.stringify(todoList));
    }

    inputElements.value = '';
    dateElements.value = '';

    displayItems();
}

function displayItems() {
    let containerElement = document.querySelector('.todo_container');
    let newHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        let { item, dueDate } = todoList[i];
        newHtml += `
           <div>
              <span>${item}</span>
              <span>${dueDate}</span>
              <button onclick="deleteTodo(${i})">Delete</button>
           </div>
        `;
    }
    containerElement.innerHTML = newHtml;
}

// Function to delete a todo
function deleteTodo(index) {
    todoList.splice(index, 1);

    // Update localStorage after deletion
    localStorage.setItem('todos', JSON.stringify(todoList));

    displayItems();
}
