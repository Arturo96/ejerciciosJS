let d = document;

const responsiveConJS = d.getElementById("responsiveConJS");

const agregarEnlaces = () => {
    let fragment = document.createDocumentFragment();

    let externos = document.createElement("div");
    externos.classList.add("externos");
    externos.id = "externos";
    externos.innerHTML = `
        <a href="https://youtu.be/16geDhp5Xmg" 
        target="_blank" rel="noopener"
        >Ver Video</a>
        <a href="https://goo.gl/maps/ygJx2uzDN1g859kWA"
        target="_blank" rel="noopener">Ver Mapa</a>
    `;
    fragment.append(externos);
    responsiveConJS.append(fragment);
    console.log('Se agregaron enlaces');
};

const agregarContenido = () => {
    let fragment = document.createDocumentFragment();

    let contenido = document.createElement("div");
    contenido.classList.add("contenido");
    contenido.id = "contenido";
    contenido.innerHTML = `
        <iframe width="560" height="315" src="https://www.youtube.com/embed/16geDhp5Xmg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7932.184115106173!2d-75.59564707581258!3d6.251600131899445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44290982147175%3A0x8d6962be8ace9809!2sFlorida%20Nueva%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses-419!2sco!4v1599775511948!5m2!1ses-419!2sco" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        `;
    fragment.append(contenido);
    responsiveConJS.append(fragment);
    console.log('Se agregó contenido');
};

const drawElements = () => {
    let externos = d.getElementById("externos");
    let existeContenido = d.getElementById("contenido");
    if (matchMedia("(min-width: 768px)").matches) {
        if (externos) externos.remove();
        
        if(!existeContenido) agregarContenido();
    } else {
        if(existeContenido) existeContenido.remove();
        if(!externos) agregarEnlaces();
    }
}

const responsiveJS = () => {
	
	addEventListener("resize", () => {
        drawElements();
	});
};

export {
    drawElements, responsiveJS
}