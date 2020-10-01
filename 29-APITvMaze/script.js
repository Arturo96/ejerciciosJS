const d = document,
    frmPelicula = d.getElementById("frmPelicula"),
    divPeliculas = d.getElementById("peliculas");

frmPelicula.addEventListener('submit', async e => {
    e.preventDefault();
  
    const busqueda = d.getElementById("txtPelicula").value.toLowerCase();

    if (busqueda.length === 0) {
        alert("Por favor, ingresa una película");
        return;
    }

    const URL = `http://api.tvmaze.com/search/shows?q=${busqueda}`

    try {
        const res = await fetch(URL),
            jsons = await res.json(),
            peliculas = await jsons.map(json => json.show);

        console.log(peliculas);

        let html = "";

        if(peliculas.length === 0) html += "<h3>Sin resultados</h3>"

        peliculas.forEach(p => {
            const {name, summary} = p,
                image = p.image ? p.image : {medium: "http://static.tvmaze.com/images/no-img/no-img-portrait-text.png"},
                img = image.medium || image.original || "";


            html += `<div class="pelicula">
                        <img src="${img}" alt="${name}">
                        <h2>${name}</h2>
                        ${summary || "<p>Sin descripción</p>"}
                    </div>`

        });

        divPeliculas.innerHTML = html;
    } catch (err) {
        console.log(err);
    }
})