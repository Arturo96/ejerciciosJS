const d = document;

export const validarFrm = () => {
	const frmContacto = d.getElementById("frmContacto");

	const errorNombre = d.getElementById("errorNombre"),
		errorCorreo = d.getElementById("errorCorreo"),
		errorComments = d.getElementById("errorComments");

	frmContacto.addEventListener("keyup", e => {
		if (e.target.matches("#txtNombre")) {
			let nombre = e.target.value.trim() + " ";
			const exp = /^([a-zA-Z]{2,20}\s){2,5}$/i;
			if (!exp.test(nombre)) {
				errorNombre.classList.add("showError");
			} else {
				errorNombre.classList.remove("showError");
			}
		}

		if (e.target.matches("#txtCorreo")) {
			let correo = e.target.value.trim();
			const exp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
			if (!exp.test(correo)) {
				errorCorreo.classList.add("showError");
			} else {
				errorCorreo.classList.remove("showError");
			}
		}

		if (e.target.matches("#txtAsunto")) {
			let asunto = e.target.value.trim();
			if (asunto.length === 0) {
				errorAsunto.classList.add("showError");
			} else {
				errorAsunto.classList.remove("showError");
			}
		}

		if (e.target.matches("#txtComments")) {
			let comentarios = e.target.value.trim();

			if (comentarios.length > 255) {
				errorComments.classList.add("showError");
			} else {
				errorComments.classList.remove("showError");
			}
		}
	});

	frmContacto.addEventListener("submit", async e => {
		e.preventDefault();
		const contactoLoader = d.getElementById("contactoLoader");
		const contactoResponse = d.getElementById("contactoResponse");

		contactoLoader.classList.add("showElement");

		try {
			const URL =
					"https://formsubmit.co/ajax/sagptt@gmail.com",
				res = await fetch(URL, {
					method: 'POST',
					body: new FormData(e.target)
				}),
				datos = await res.json();

			if (!res.ok) throw { status: res.status, statusText: res.statusText };

			contactoLoader.classList.remove("showElement");
			contactoResponse.children[0].textContent = datos.message;
			contactoResponse.classList.add("showElement");
		} catch (err) {
			const message = err.statusText || `Ocurrió un error`;
			console.log(`Error ${err.status}: ${message}`);
		} finally {
			e.target.reset();
		}

		// 	let numErrores = 0;
		// 	e.preventDefault();

		// 	let nombre = d.getElementById("txtNombre").value.trim();
		// 	if (nombre.length === 0) errorNombre.classList.add("showError");

		// 	let correo = d.getElementById("txtCorreo").value.trim();
		// 	if (correo.length === 0) errorCorreo.classList.add("showError");
		// 	let asunto = d.getElementById("txtAsunto").value.trim();
		// 	if (asunto.length === 0) errorAsunto.classList.add("showError");
		// 	let comentarios = d.getElementById("txtComments").value.trim();

		// 	numErrores += d.querySelectorAll(".showError").length;

		// 	if (numErrores === 0) {
		// 		const contactoLoader = d.getElementById("contactoLoader");
		// 		const contactoResponse = d.getElementById("contactoResponse");

		// 		contactoLoader.classList.add("showElement");

		// 		setTimeout(() => {
		// 			contactoLoader.classList.remove("showElement");
		// 			contactoResponse.classList.add("showElement");
		// 			e.target.reset();
		// 		}, 3000)
		// 	}
	});
};
