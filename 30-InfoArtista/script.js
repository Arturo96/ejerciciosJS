const d = document,
	frmArtista = d.getElementById("frmArtista"),
	divArtista = d.getElementById("artista"),
	divBiografia = d.getElementById("biografia"),
	divCancion = d.getElementById("cancion");

frmArtista.addEventListener("submit", async e => {
	e.preventDefault();

	const artista = d.getElementById("txtArtista").value.toLowerCase();

	let cancion = d.getElementById("txtCancion").value.toLowerCase();

	if (artista.length === 0 || cancion.length === 0) {
		alert("Por favor, llena los campos.");
		return;
	}

	const URLArtista = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`,
		URLCancion = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

	try {
		const resps = await Promise.all([fetch(URLArtista), fetch(URLCancion)]);

		const jsons = await Promise.all(resps.map(resp => resp.json()));

        const artista = jsons[0].artists ? jsons[0].artists[0]
                                        : null,
			letraCancion = jsons[1].lyrics;

		let htmlArtista = "",
            htmlCancion = "";
            
        if (artista) {
            console.log(artista);

            const strArtist = artista.strArtist,
            strArtistBanner = artista.strArtistBanner,
            intBornYear = artista.intBornYear || 'N/A',
            strCountry = artista.strCountry || 'N/A',
            strStyle = artista.strStyle || 'N/A',
            strWebsite = artista.strWebsite || 'N/A',
            biografia = artista.strBiographyES || artista.strBiographyEN || 'N/A';
            ;
    
            htmlArtista += `
                <h2>${strArtist}</h2>
                <img src="${strArtistBanner}" alt="${strArtist}">
                <h3>${intBornYear}</h3>
                <h3>${strCountry}</h3>
                <h3>${strStyle}</h3>
                <a href="#">${strWebsite}</a>
                <p>${biografia}</p>
            `;
        } else {
            htmlArtista += "<h2>Sin resultados</h2>"
        }

		divBiografia.innerHTML = htmlArtista;

		if (!letraCancion) {
			cancion = "No existe la canción solicitada.";
		}

		htmlCancion += `
            <h2>${cancion}</h2>
            <blockquote>${letraCancion}</blockquote>
        `;

		divCancion.innerHTML = htmlCancion;
	} catch (err) {
		console.error(err);
	}
});
