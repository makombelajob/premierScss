const stockLocal = JSON.parse(localStorage.getItem("Daily")) || [];
let stockTable = stockLocal;
const submit = document.querySelector("#submit");
submit.addEventListener("click", function(e) {
    e.preventDefault();

    const taskList = document.querySelector("#listtask");
    const taskValue = taskList.innerHTML.trim();

    if(taskValue.length < 5) {
        alert("Veuillez entrez une tâche");
        return;
    }

    let stockObejt = {
        added : taskValue
    }
    stockTable.push(stockObejt);

    const stockJson = JSON.stringify(stockTable);
    localStorage.setItem("Daily", stockJson);

    location.href = "../index.html";
})