const d = document,
    main = d.getElementById("main");

const cargarMarkdown = async () => {
	try {
		const res = await fetch("ejemplo.md"),
            md = await res.text();

            if(!res.ok) {
                throw("Error: no se encontró el recurso");
            }
            
            const converter = new showdown.Converter();

            const html = converter.makeHtml(md);

            main.innerHTML = html;
	} catch (err) {
        main.innerHTML = err;
    }
    
};

cargarMarkdown();
