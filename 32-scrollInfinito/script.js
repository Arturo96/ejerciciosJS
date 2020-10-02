const d = document,
	divPokemons = d.getElementById("pokemons");

let URLinit = "https://pokeapi.co/api/v2/pokemon",
	URLnext = "",
	bandera = true;

const capitalizar = cadena => {
	return cadena[0].toUpperCase() + cadena.substr(1).toLowerCase();
};

const cargarPokemons = async URL => {
	let divLoader = d.createElement("div");
	divLoader.classList.add("loader");
	divLoader.innerHTML = `<img src="puff.svg" alt="Loader">`;
	divPokemons.after(divLoader);

	try {
		
		const res = await fetch(URL),
			json = await res.json(),
			pokemons = await json.results;

		if (!res.ok) {
			throw res;
		}

		URLnext = json.next;

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
                        <figcaption>${capitalizar(name)}</figcaption>
                    </figure>
                `;
			} catch (err) {
				console.log(err);
			}
		}

		divPokemons.innerHTML += html;
	} catch (err) {
		console.error(err);
	} finally {
		divLoader.remove();
	}

	if(matchMedia('(min-width: 900px)') && bandera) {
		bandera = false;
		cargarPokemons(URLnext);
	}
};

addEventListener("scroll", e => {
	const { scrollTop, clientHeight, scrollHeight } = d.documentElement;

	if ((scrollTop + clientHeight === scrollHeight) && URLnext) {
		cargarPokemons(URLnext);
	}
});

cargarPokemons(URLinit);
