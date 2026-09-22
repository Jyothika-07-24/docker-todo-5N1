function addTask() {

    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = task;
    span.className = "task-text";

    let completeButton = document.createElement("button");
    completeButton.innerText = "Complete";
    completeButton.className = "complete-btn";

    completeButton.onclick = function () {
        span.classList.toggle("completed");
    };

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete-btn";

    deleteButton.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}