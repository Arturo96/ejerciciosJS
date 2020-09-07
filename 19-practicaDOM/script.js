import { iniciarReloj, detenerReloj, iniciarAlarma, detenerAlarma } from "./modulos/reloj.js";
import { setEsfera } from "./modulos/esfera.js";
import { temporizador } from "./modulos/temporizador.js";
(() => {
	console.log(moment("2020-09-06 10:37:00").countdown().toString());
	let menu = document.getElementById("menu");

	document.addEventListener("click", e => {
		if (e.target.matches(".burger, .burger--wrapper")) {
			menu.classList.toggle("show-menu");
		}
	});

	setEsfera();
	temporizador();
})();
