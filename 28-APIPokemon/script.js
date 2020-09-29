const d = document,
    divPokemons = d.getElementById("pokemons"),
    prev = d.getElementById("prev"),
    next = d.getElementById("next");

let URLinit = "https://pokeapi.co/api/v2/pokemon",
    URLprev = "", URLnext = "";

const capitalizar = cadena => {
	return cadena[0].toUpperCase() + cadena.substr(1).toLowerCase();
};

const cargarPokemons = async (URL) => {
	try {
		const res = await fetch(URL),
			json = await res.json(),
			pokemons = await json.results;

		if (!res.ok) {
			throw { status: res.status, statusText: res.status };
		}

        URLprev = json.previous;
        URLnext = json.next;

        if(URLprev) prev.classList.add("show");
        else prev.classList.remove("show");

        if(URLnext) next.classList.add("show");
        else next.classList.remove("show");
 

		let html = "";

		for (let i = 0; i < pokemons.length; i++) {
			try {
				let resp = await fetch(pokemons[i].url),
					pokemonDetail = await resp.json();

				const { sprites, name } = pokemonDetail,
					{ front_default: img } = sprites;

				html += `
                    <figure class="pokemon">
                        <img src="${img}" alt="${name}">
                        <caption>${capitalizar(name)}</caption>
                    </figure>
                `;
			} catch (err) {
				console.log(err);
			}
		}

		divPokemons.innerHTML = html;
	} catch (err) {
		const message = err.statusText || `Ocurrió un error`;

		console.log(`Error ${err.status}: ${message}`);
	}
};

prev.addEventListener('click', e => {
    e.preventDefault();

    cargarPokemons(URLprev);
});

next.addEventListener('click', e => {
    e.preventDefault();

    cargarPokemons(URLnext);
});

cargarPokemons(URLinit);
