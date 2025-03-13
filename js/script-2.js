const tache = document.querySelector("#listUl");

const tasks = JSON.parse(localStorage.getItem("Daily")) ?? [];
console.table(tasks);

for (const task of tasks) {
    const template = document.querySelector("#template");
    const init = template.content.cloneNode(true);

    const li = init.querySelector("li");
    const label = init.querySelector("label");
    const checkbox = init.querySelector("input[type='checkbox']");
    const edit = init.querySelector("#edit");
    const reset = init.querySelector("#reset");

    label.textContent = task.added;

    reset.addEventListener("click", function () {
        const taskText = label.textContent; 
        li.remove(); 

        const updatedTasks = tasks.filter(t => t.added !== taskText);

        localStorage.setItem("Daily", JSON.stringify(updatedTasks));
    });
    tache.appendChild(init);

}
