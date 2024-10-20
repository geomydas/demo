const todoInput = document.querySelector("#todo-input");
const todoForm = document.querySelector("#todo-form");
const todoContainer = document.querySelector("#todo-container");
const todoItemsLeft = document.querySelector("#todo-items-left");

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const todoFormData = new FormData(event.target);
  const data = Object.fromEntries(todoFormData);

  const todoItem = document.createElement("li");
  const todoItemClose = document.createElement("button");
  const todoItemComplete = document.createElement("input");

  todoItem.textContent = data.todoInput;
  todoItemClose.textContent = "close";

  todoItemComplete.setAttribute("type", "checkbox");

  if (data.todoInput.trim() !== "") {
    todoContainer.appendChild(todoItem);
    todoItem.appendChild(todoItemClose);
    todoItem.prepend(todoItemComplete);
  }

  todoItemsLeft.textContent = todoContainer.childElementCount;

  todoForm.reset();
});
