export const setEsfera = () => {
	const nPasos = 20;
	let d = document;
	let esferaWrapper = d.getElementById("esferaWrapper"),
		esfera = d.getElementById("esfera"),
		esferaX = getComputedStyle(esfera).getPropertyValue("left"),
		esferaY = getComputedStyle(esfera).getPropertyValue("top");
	let x = Number(esferaX.split("px")[0]),
		y = Number(esferaY.split("px")[0]);

	let esferaWrapperWidth = Number(
			getComputedStyle(esferaWrapper).getPropertyValue("width").split("px")[0]
		),
		esferaWrapperHeight = Number(
			getComputedStyle(esferaWrapper).getPropertyValue("height").split("px")[0]
		);
	console.log(esferaWrapperWidth);
	console.log(x, y);

	document.addEventListener("keydown", e => {
		switch (e.key) {
			case "ArrowRight":
				if (x + 50 + nPasos <= esferaWrapperWidth) {
					x += nPasos;
				}
				esfera.style.setProperty("left", `${x}px`);

				break;
			case "ArrowLeft":
				if (x >= nPasos) {
					x -= nPasos;
				}
				esfera.style.setProperty("left", `${x}px`);
				break;
			case "ArrowUp":
				e.preventDefault();
				if (y >= nPasos) {
					y -= nPasos;
				}
				esfera.style.setProperty("top", `${y}px`);
				break;
			case "ArrowDown":
				e.preventDefault();
				if (y + 60 + nPasos <= esferaWrapperHeight) {
					y += nPasos;
				}
				esfera.style.setProperty("top", `${y}px`);
				break;
			default: 
				if(e.key === 'a' && e.altKey) {
					alert('Alt + A')
				}
				if(e.key === 'a' && e.ctrlKey) {
					alert('Ctrl + A')
				}
		}
	});
};
