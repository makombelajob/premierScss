const tache = document.querySelector("#listUl");

const fromSession = JSON.parse(localStorage.getItem("task")) || [];

const template = document.querySelector("#template");

for(const task of fromSession) {
    const init = template.content.cloneNode(true);

    const ul = init.querySelector("ul");
    ul.style.listStyle = "none";
    const check = init.querySelector("#checkbox");
    const label = init.querySelector("label");
    label.textContent = task;

    tache.appendChild(init);
}
