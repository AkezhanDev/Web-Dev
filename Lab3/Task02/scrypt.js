const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = input.value.trim();
  if (!text) return;

  addTodoItem(text);
  input.value = "";
  input.focus();
});

function addTodoItem(text) {
  const listItem = document.createElement("li");
  listItem.className = "todo-item";

  const left = document.createElement("div");
  left.className = "todo-left";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.className = "todo-text";
  span.textContent = text;

  checkbox.addEventListener("change", () => {
    span.classList.toggle("done", checkbox.checked);
  });

  const delBtn = document.createElement("button");
  delBtn.className = "delete-btn";
  delBtn.type = "button";
  delBtn.textContent = "Delete";

  delBtn.addEventListener("click", () => {
    listItem.remove();
  });

  left.appendChild(checkbox);
  left.appendChild(span);

  listItem.appendChild(left);
  listItem.appendChild(delBtn);

  todoList.appendChild(listItem);
}