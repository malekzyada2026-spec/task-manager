function addTask() {
    const input = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (input.value.trim() === "") {
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        ${input.value}
        <button onclick="this.parentElement.classList.toggle('completed')">
           Complete
        </button>
        <button onclick="this.parentElement.remove()">Delete</button>
    `;

    taskList.appendChild(li);
    input.value = "";
}