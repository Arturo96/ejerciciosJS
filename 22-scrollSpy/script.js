const d = document;

const secciones = d.querySelectorAll("article");

const observarElementos = elementos => {
    elementos.forEach(el => {
        let id = el.target.id,
            item = d.querySelector(`a[href="#${id}"]`);
        if(el.isIntersecting) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    })
}

const observer = new IntersectionObserver(observarElementos, {
    threshold: [0.5, 1]
});

secciones.forEach(seccion => observer.observe(seccion));
