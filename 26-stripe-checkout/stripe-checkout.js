import STRIPE_KEYS from "./modules/stripe-keys.js";

const d = document,
	cards = d.getElementById("cards"),
	options = {
		headers: {
			Authorization: `Bearer ${STRIPE_KEYS.secret}`
		}
	};

const conectarStripe = () => {
	try {
		const URLBase = "https://api.stripe.com/v1/",
			URLProductos = URLBase + "products",
			URLPrecios = URLBase + "prices";

		Promise.all([fetch(URLProductos, options), fetch(URLPrecios, options)])
			.then(resps => Promise.all(resps.map(res => res.json())))
			.then(jsons => {
				const productos = jsons[0].data,
					precios = jsons[1].data;

				let html = "";

				precios.forEach(precio => {
					const [producto] = productos.filter(p => p.id === precio.product),
						[img] = producto.images,
						{ name } = producto;
					
					let precioFormat = precio.unit_amount_decimal.slice(0, -2);

					precioFormat = `${precioFormat.slice(0, -3)}.${precioFormat.slice(-3)}`;
                        
					html += `
                        <div class="card" data-price="${precio.id}">
                            <figure>
                                <img src="${img}" alt="${name}">
                                <caption><b>${name}</b></caption>
                            </figure>
                            <h3>$${precioFormat} ${precio.currency.toUpperCase()}</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam ratione, eos hic blanditiis quaerat, perspiciatis.</p>

                            <button>Ver más...</button>
                        </div>
                    `;
                });
                
                cards.innerHTML = html;
			})
			.catch(err => console.log(err));

		
	} catch (err) {
		console.log(err);
	}
};

const checkOut = idPrecio => {
	Stripe(STRIPE_KEYS.public)
		.redirectToCheckout({
			lineItems: [{price: idPrecio, quantity: 1}],
			mode: "subscription",
			successUrl: "http://127.0.0.1:5500/26-stripe-checkout/success.html",
			cancelUrl: "http://127.0.0.1:5500/26-stripe-checkout/error.html",
		})
		.then(res => {
			console.log(res);
			if(res.error) {
				console.err(`Error en la respuesta.`);
			}

		})
}

conectarStripe();

d.addEventListener('click', e => {
	if(e.target.matches(".card *")) {
		let idPrecio = e.target.parentElement;
		if(e.target.matches(".card figure *")) {
			idPrecio = idPrecio.parentElement;
		}
		idPrecio = idPrecio.dataset.price;
		checkOut(idPrecio)
	}

	if(e.target.matches(".card")) {
		let idPrecio = e.target.dataset.price;
		checkOut(idPrecio)
	}


})
