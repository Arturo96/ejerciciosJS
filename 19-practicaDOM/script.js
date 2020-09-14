import { iniciarReloj, detenerReloj, iniciarAlarma, detenerAlarma } from "./modulos/reloj.js";
import { changeTheme } from "./modulos/changeTheme.js";
import { drawElements } from "./modulos/responsiveJS.js";
import { principal } from "./modulos/index.js";
(() => {
	console.log(moment("2020-09-09 09:38:00").countdown().toString());
	let menu = document.getElementById("menu");
	const botonTop = document.getElementById('scroll-top');
	const botonTheme = document.getElementById('theme')
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

			changeTheme();
			if(document.body.classList.length > 0) {
				localStorage.setItem("theme", "dark");
			} else {
				localStorage.removeItem("theme");
			}
		}
	});

	document.addEventListener('scroll', e => {
		if(document.documentElement.scrollTop > 50) {
			botonTop.style.opacity = 1;
		} else {
			botonTop.style.opacity = 0;
		}
	})

	addEventListener("DOMContentLoaded", () => {
		if(localStorage.getItem("theme")) {
			changeTheme();
		}
		drawElements();
	})

	principal();
})();
