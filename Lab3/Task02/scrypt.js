const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const text = input.value.trim();
  if (text === "") return;

  addTask(text);

  input.value = ""; // update or delete previous string from input
  input.focus(); // put cursor into the input field
});

function addTask(text) {
  const li = document.createElement("li");
  li.className = "todo-item";

  const left = document.createElement("div");
  left.className = "todo-left";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.className = "todo-text";
  span.textContent = text;

  checkbox.addEventListener("change", function () {
    span.classList.toggle("done"); // toggle liike switcher add done to the todo-text
  });

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.className = "delete-btn";
  delBtn.type = "button";

  delBtn.addEventListener("click", function () {
    li.remove();
  });

  left.appendChild(checkbox);
  left.appendChild(span);

  li.appendChild(left);
  li.appendChild(delBtn);

  list.appendChild(li);
}