const d = document,
    dragContainer = d.querySelector(".drag-container");

dragContainer.addEventListener("dragover", e => {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.add("is-active");
})

dragContainer.addEventListener("dragleave", e => {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.remove("is-active");
})

dragContainer.addEventListener("drop", e => {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.remove("is-active");
    alert("Arrastraste un archivo");
})