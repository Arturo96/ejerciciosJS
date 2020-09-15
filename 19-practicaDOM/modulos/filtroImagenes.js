import { imagenes } from "./imagenes.js";

const d = document;

const galeria = d.getElementById("galeria");

const drawAllImages = () => {

    let html = "";

    imagenes.forEach(imagen => {
        html += `
                <div class="card">
                    <img src="${imagen.url}" />
                    <h4>${imagen.title}</h4>
                </div>
        `
    })

    galeria.innerHTML = html;
}

const drawFilteredImages = criterio => {

    criterio = criterio.toLowerCase();

    let resultado = imagenes.filter(imagen => imagen.title.toLowerCase().includes(criterio));

    let html = "";

    resultado.forEach(imagen => {
        html += `
                <div class="card">
                    <img src="${imagen.url}" />
                    <h4>${imagen.title}</h4>
                </div>
        `
    })

    galeria.innerHTML = html;
}

export const filtroImagenes = () => {
    drawAllImages();

    const buscarImagen = d.getElementById("buscarImagen");

    buscarImagen.addEventListener("keyup", e => {
        drawFilteredImages(e.target.value);
    })
}

