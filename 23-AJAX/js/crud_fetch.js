const d = document,
	listaCelulares = d.getElementById("listaCelulares"),
    frmCelular = d.getElementById("frmCelular"),
    IDHidden = frmCelular.idCelular;
    URL = "http://localhost:3000/celulares";

const listarCelulares = async () => {
	try {
		const res = await fetch(URL),
			celulares = await res.json();

		if (!res.ok) {
			throw {
				status: res.status,
				statusText: res.statusText
			};
		}

		let html = "";

		celulares.forEach(celular => {
			html += `
            <tr>
            <td>${celular.id}</td>
            <td>${celular.marca}</td>
            <td>${celular.modelo}</td>
            <td>
                <div class="botones">
                    <button data-id="${celular.id}" class="btn-update" type="button">Editar</button>
                    <button data-id="${celular.id}" class="btn-delete" type="button">Borrar</button>
                </div>
            </td>
        </tr>
            `;
		});

		listaCelulares.innerHTML = html;
	} catch (err) {
		const message = err.statusText || "Ocurrió un error.";

		console.log(`Error ${err.status}: ${message}`);
	}
};

const guardarUpdate = async id => {
    const URL_ID = `http://localhost:3000/celulares/${id}`,
    marca = d.getElementById("txtMarca").value,
    modelo = d.getElementById("txtModelo").value;

    if (marca.length > 0 && modelo.length > 0) {
        try {
            const res = await fetch(URL_ID, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json; charset=utf-8"
                },
                body: JSON.stringify({
                    marca,
                    modelo
                })
            });
            
            if (!res.ok) throw { status: res.status, statusText: res.statusText };
    
            
        } catch (err) {
            const message = err.statusText || "Error en la edición";
    
            console.log(`Error ${err.status} : ${message}`);
        }
    } else {
        alert("No puedes dejar campos vacios.")
    }

    IDHidden.value = 0;
	
}

const editarCelular = async id => {
	const URL_ID = `http://localhost:3000/celulares/${id}`;

	try {
		const res = await fetch(URL_ID),
			celular = await res.json();

		if (!res.ok) throw { status: res.status, statusText: res.statusText };

		const txtMarca = d.getElementById("txtMarca"),
            txtModelo = d.getElementById("txtModelo");
            
        txtMarca.value = celular.marca;
        txtModelo.value = celular.modelo;

        IDHidden.value = id;
	} catch (err) {
		const message = err.statusText || "Error en la edición";

		console.log(`Error ${err.status} : ${message}`);
	}
};

const borrarCelular = async id => {
	const URL_ID = `http://localhost:3000/celulares/${id}`;

	try {
		const res = await fetch(URL_ID, {
			method: "DELETE"
		});

		if (!res.ok) throw { status: res.status, statusText: res.statusText };
	} catch (err) {
		const message = err.statusText || "Error al borrar";

		console.log(`Error ${err.status} : ${message}`);
	}
};

frmCelular.addEventListener("submit", async e => {
	e.preventDefault();

	const marca = d.getElementById("txtMarca").value,
		modelo = d.getElementById("txtModelo").value;

	if (marca.length > 0 && modelo.length > 0) {
		try {
			const res = await fetch(URL, {
				method: "POST",
				headers: {
					"Content-type": "application/json; charset=utf-8"
				},
				body: JSON.stringify({
					marca,
					modelo
				})
			});

			if (!res.ok) {
				throw {
					status: res.status,
					statusText: res.statusText
				};
			}
		} catch (err) {
			const message = err.statusText || "No se pudo ingresar el producto.";

			console.log(`Error ${err.status}: ${message}`);
		}
	} else {
		alert("Por favor, llena los campos.");
	}
});

d.addEventListener("click", e => {
	if (e.target.matches(".btn-update")) {
		const id = e.target.dataset.id;

		editarCelular(id);
	}

	if (e.target.matches(".btn-delete")) {
		const id = e.target.dataset.id;

		borrarCelular(id);
    }
    
    if (e.target.matches("#btnUpdateCel")) {
        if(IDHidden.value > 0) {
            guardarUpdate(IDHidden.value);
            
        } else {
            alert("Tienes que darle al botón Editar del pdto correspondiente.")
        }
        frmCelular.reset();
    }
});

listarCelulares();
