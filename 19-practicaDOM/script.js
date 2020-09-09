import { iniciarReloj, detenerReloj, iniciarAlarma, detenerAlarma } from "./modulos/reloj.js";
import { setEsfera } from "./modulos/esfera.js";
import { temporizador } from "./modulos/temporizador.js";
(() => {
	console.log(moment("2020-09-09 09:38:00").countdown().toString());
	let menu = document.getElementById("menu");
	const botonTop = document.getElementById('scroll-top');
	const botonTheme = document.getElementById('theme'),
		  iconTheme = document.getElementById('dark-light');

	document.addEventListener("click", e => {
		// Menu hamburguesa
		if (e.target.matches("#burger, .burger--wrapper")) {
			menu.classList.toggle("show-menu");
		}

		// Scroll Top
		if (e.target.matches("#scroll-top, #arrow-top")) {
			scrollTo({
				behavior: "smooth",
				top: 0
			})
		}

		// Change Theme
		if (e.target.matches("#theme, #dark-light")) {
			iconTheme.classList.toggle('fa-moon');
			iconTheme.classList.toggle('fa-sun');
			document.body.classList.toggle('dark')
		}
	});

	document.addEventListener('scroll', e => {
		if(document.documentElement.scrollTop > 50) {
			botonTop.style.opacity = 1;
		} else {
			botonTop.style.opacity = 0;
		}
	})

	setEsfera();
	temporizador();
})();
