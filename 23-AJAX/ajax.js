const d = document,
	ajax = d.getElementById("ajax"),
	URL = "https://jsonplaceholder.typicode.com/posts";

/* Fetch 
(() => {
    fetch(URL)
     .then(res => res.ok ? res.json() : Promise.reject(res))
     .then(posts => {
         console.log('Todo salió bien');
         
         let html = "";
         posts.forEach(post => {
             html += `<li>${post.id} - ${post.title} </li>`
         });

         ajax.innerHTML = html;
     })
     .catch(err => {
         console.log(err);
         const message = err.statusText || 'Se produjo un error.'

         ajax.innerHTML = `<li>Error ${err.status}: ${message}</li>`;
     })

})()*/

/* Fetch con Async Await 
(() => {
	const mostrarInfo = async () => {
		try {
			let resp = await fetch(URL),
				posts = await resp.json();

			if (!resp.ok) {
				throw {
					status: resp.status,
					statusText: resp.statusText
				};
            }
            
			console.log("Todo salió bien");

			let html = "";
			posts.forEach(post => {
				html += `<li>${post.id} - ${post.title} </li>`;
			});

			ajax.innerHTML = html;
		} catch (err) {
			console.log(err);
			const message = err.statusText || "Se produjo un error.";

			ajax.innerHTML = `<li>Error ${err.status}: ${message}</li>`;
		}
	};

	mostrarInfo();
})(); */

(() => {
	const mostrarInfo = () => {
		let posts = axios
			.get(URL)
			.then(posts => {
				let html = "";
				posts.data.forEach(post => {
					html += `<li>${post.id} - ${post.title} </li>`;
				});

				ajax.innerHTML = html;
			})
			.catch(err => {
				console.log(err.response);
				const message = err.response.statusText || "Se produjo un error.";

				ajax.innerHTML = `<li>Error ${err.response.status}: ${message}</li>`;
			});

	};

	mostrarInfo();
})();
