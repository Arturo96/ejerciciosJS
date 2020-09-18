const d = document;

export const narrarTexto = () => {
    if (!typeof speechSynthesis) return;
    
    let voces;

	const vocesContainer = d.getElementById("voces-container"),
		frmNarrar = d.getElementById("frmNarrar");

	setTimeout(() => {
		voces = speechSynthesis.getVoices();

		let html = "";

		voces.forEach(voz => {
			html += `<option value="${voz.name}">${voz.name} (${voz.lang})</option>`;
		});

		vocesContainer.innerHTML += html;
	}, 3000);

	frmNarrar.addEventListener("submit", e => {
		e.preventDefault();
        const texto = d.getElementById("texto").value;
		let vozElegida = vocesContainer.value;

		setTimeout(() => {
            vozElegida = voces.filter(voz => voz.name == vozElegida)[0];
            let narrador = new SpeechSynthesisUtterance(texto);
            narrador.voice = vozElegida;
			speechSynthesis.speak(narrador);
		}, 0);
	});
};
