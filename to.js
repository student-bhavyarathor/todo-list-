const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function Add() {
    if (inputBox.value === '') {
        alert("Please Enter Task");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        
        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);
        
        listContainer.appendChild(li);
        inputBox.value = "";
        saveData();
    }
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
    saveData();
});

function saveData() {
    const tasks = [];
    listContainer.querySelectorAll("li").forEach(task => {
        tasks.push(task.textContent);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function ShowTask() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(task => {
        let li = document.createElement("li");
        li.textContent = task;
        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);
        listContainer.appendChild(li);
    });
}

ShowTask();
