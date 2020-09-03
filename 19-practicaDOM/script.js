import { iniciarReloj, detenerReloj, iniciarAlarma, detenerAlarma } from "./modulos/reloj.js";
import { setEsfera } from "./modulos/esfera.js";
(() => {
	let menu = document.getElementById("menu");

	document.addEventListener("click", e => {
		if (e.target.matches(".burger, .burger--wrapper")) {
			menu.classList.toggle("show-menu");
		}
	});

	setEsfera();
})();
