let inputVisible = false;

function addTask() {
  const input = document.getElementById("taskInput");

  // Show input field and placeholder on first click of "+"
  if (!inputVisible) {
    input.classList.add("visible");
    input.placeholder = "Add a new task...";
    input.focus();
    inputVisible = true;
    return;
  }

  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  // Create checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    li.classList.toggle("done", checkbox.checked);
  });

  // Create task text
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  // Create remove button
  const removeBtn = document.createElement("span");
  removeBtn.textContent = "✕";
  removeBtn.className = "remove";
  removeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
  });

  // Append checkbox, text, and remove button
  li.appendChild(checkbox);
  li.appendChild(taskSpan);
  li.appendChild(removeBtn);

  // Append task to the list
  document.getElementById("taskList").appendChild(li);

  // Clear the input field
  input.value = "";
}
