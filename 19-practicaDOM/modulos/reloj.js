let d = document;
let reloj = d.getElementById("reloj");
let alarma = d.querySelector("audio");
let iniciarReloj = d.getElementById("iniciarReloj");
let detenerReloj = d.getElementById("detenerReloj");
let iniciarAlarma = d.getElementById("iniciarAlarma");
let detenerAlarma = d.getElementById("detenerAlarma");
let horaActual, alarmaTime;

iniciarReloj.addEventListener("click", e => {
	e.target.disabled = true;
	detenerReloj.disabled = false;
	horaActual = setInterval(() => {
		reloj.textContent = new Date().toLocaleTimeString();
	}, 1000);
});

detenerReloj.addEventListener("click", e => {
	e.target.disabled = true;
	iniciarReloj.disabled = false;
	clearInterval(horaActual);
});

iniciarAlarma.addEventListener("click", e => {
	e.target.disabled = true;
	alarma.play();
});

detenerAlarma.addEventListener("click", e => {
	iniciarAlarma.disabled = false;
	alarma.pause();
	alarma.currentTime = 0;
});

export { iniciarReloj, detenerReloj, iniciarAlarma, detenerAlarma };
