const d = document,
	n = navigator,
	glocation = n.geolocation;

export const geolocalizacion = () => {
	const geo = d.getElementById("geo");

	const divsGeo = d.querySelectorAll(".geo strong");

	if ("geolocation" in n) {
		/* la geolocalización está disponible */

		const enlaceMaps = d.createElement("a");
        enlaceMaps.textContent = "Ver en Google Maps";
        enlaceMaps.target = "_blank";
        enlaceMaps.rel = "noopener"

		glocation.getCurrentPosition(position => {
			const coordenadas = position.coords,
				latitud = coordenadas.latitude,
				longitud = coordenadas.longitude,
				precision = coordenadas.accuracy;

			const medidas = [latitud, longitud, precision];

			divsGeo.forEach((medida, i) => (medida.textContent = medidas[i]));

			enlaceMaps.href = `https://www.google.com/maps/@${latitud},${longitud}`;

			geo.append(enlaceMaps);
		});
	} else {
		divsGeo.forEach(medida => (medida.textContent = "NO COMPATIBLE"));
	}
};
