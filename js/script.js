
const fromSession = JSON.parse(localStorage.getItem("task")) || [];
let taskList = fromSession ?? [];

const form = document.querySelector("form");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    const task = document.querySelector("#listtask");
    if(task.value.length <= 5) {
        alert("Une tâche de plus ou moins 5 caractès !");
        return;
    }
    const taskValue = task.value;

    taskList.push(taskValue);

    const taskJason = JSON.stringify(taskList);
    localStorage.setItem("task", taskJason);

    window.location.href = "../index.html";
});
console.table(taskList)
console.clear();