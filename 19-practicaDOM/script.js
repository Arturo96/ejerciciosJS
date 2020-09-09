import { iniciarReloj, detenerReloj, iniciarAlarma, detenerAlarma } from "./modulos/reloj.js";
import { setEsfera } from "./modulos/esfera.js";
import { temporizador } from "./modulos/temporizador.js";
import {scrollToTop} from './modulos/scrollTop.js';
(() => {
	console.log(moment("2020-09-09 09:38:00").countdown().toString());
	let menu = document.getElementById("menu");
	const botonTop = document.getElementById('scroll-top');

	document.addEventListener("click", e => {
		// Menu hamburguesa
		if (e.target.matches("#burger, .burger--wrapper")) {
			menu.classList.toggle("show-menu");
		}

		// Scroll Top
		if (e.target.matches("#scroll-top, #arrow-top")) {
			// document.documentElement.scrollTop = 0;
			scrollToTop(400);
		}
	});

	document.addEventListener('scroll', e => {
		if(document.documentElement.scrollTop > 50) {
			botonTop.style.display = 'block'
		} else {
			botonTop.style.display = 'none'
		}
	})

	setEsfera();
	temporizador();
})();
