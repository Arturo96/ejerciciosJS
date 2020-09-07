export const temporizador = () => {
	const countdown = document.getElementById("countdown");

	const fechaDada = "2020-09-07 11:10:30";

	let tiempoRestante = "",
		segundosRestantes = "";

	setInterval(() => {
		segundosRestantes = Math.round(moment(fechaDada).countdown().value / 1000);
		if (segundosRestantes >= 0) {
			countdown.textContent = "¡Se acabó el tiempo!";
		} else {
            tiempoRestante = "Quedan: " + moment(fechaDada).countdown().toString();
            tiempoRestante = traducirConteo(tiempoRestante);

			countdown.textContent = tiempoRestante;
		}
	}, 1000);
};

const traducirConteo = conteo => {
	conteo = conteo.replace("ute", "uto");
	conteo = conteo.replace("and", "y");
	conteo = conteo.replace("cond", "gundo");
	conteo = conteo.replace("ur", "ra");
	conteo = conteo.replace("ay", "ía");
    conteo = conteo.replace("month", "mes");
    conteo = conteo.replace("mess", "meses");
    conteo = conteo.replace("year", "año");
	return conteo;
};
