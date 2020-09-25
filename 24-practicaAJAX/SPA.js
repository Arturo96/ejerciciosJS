const d = document,
	mainContent = d.getElementById("mainContent");

// const loadHeader = async() => {
//     const URL = "assets/components/header.html";
//     try {
//         const res = await fetch(URL),
//               html = await res.text();

//         const header = d.createElement("header");
//         header.classList.add("header");
//         header.innerHTML = html;
//         document.body.prepend(header);
//     } catch (err) {
//         console.log(err);
//     }
// }

// const loadFooter = async() => {
//     const URL = "assets/components/footer.html";
//     try {
//         const res = await fetch(URL),
//               html = await res.text();

//         const footer = d.createElement("footer");
//         footer.innerHTML = html;
//         document.body.append(footer);
//     } catch (err) {
//         console.log(err);
//     }
// }

const ejecutarAJAX = async (URL, template) => {
	const res = await fetch(URL),
		html = await res.text();

	template.outerHTML = html;
};

const loadTemplate = () => {
	const templates = d.querySelectorAll("[data-include]");

	try {
		templates.forEach(t => {
			const URL = t.dataset.include;
			ejecutarAJAX(URL, t);
		});
	} catch (err) {
		console.log(err);
	}
};

d.addEventListener("click", async e => {
	if (e.target.matches(".menu a")) {
		e.preventDefault();
		const URL = e.target.href;

		if (e.target.id === "main-page") {
			mainContent.innerHTML = `
            <h1>IT & Security Consultores Ltda.</h1>

            <p>En IT & Security Consultores, nuestro principal objetivo es ofrecer servicios y soluciones integrales para salvaguardar la información de la empresas, ayudando así a todos nuestros clientes a establecer políticas y estrategias adecuadas de seguridad que ayuden a prevenir de forma proactiva el ingreso de todo tipo de malware (virus, gusanos, troyanos, spyware, adware, riskware, keyloggers, hijackers, spam, etc.), ataques de hackers y/o cyber-delincuentes, y en general a controlar todo tipo de contenido potencialmente peligroso, que amenace la seguridad de los sistemas informáticos de las compañías.</p>
            `;

			return;
		}

		try {
			const res = await fetch(URL),
				html = await res.text();

			if (!res.ok) throw { status: res.status, statusText: res.statusText };

			mainContent.innerHTML = html;
		} catch (err) {
			let message = err.statusText || "Ocurrió un error";

			mainContent.innerHTML = `<h2>Error ${err.status}: ${message}</h2>`;
		}
	}
});

// loadHeader();
// loadFooter();
loadTemplate();
