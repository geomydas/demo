const todoInput = document.querySelector("#todo-input");
const todoForm = document.querySelector("#todo-form");
const todoContainer = document.querySelector("#todo-container");
const todoItemsLeft = document.querySelector("#todo-items-left");

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const todoFormData = new FormData(event.target);
  const data = Object.fromEntries(todoFormData);

  const todoItem = document.createElement("li");
  todoItem.textContent = data.todoInput;

  todoContainer.appendChild(todoItem);

  todoItemsLeft.textContent = todoContainer.childElementCount;
});
