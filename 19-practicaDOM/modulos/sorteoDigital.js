const d = document;

export const sorteoDigital = () => {
    let lenguajes = Array.from(d.querySelectorAll(".sorteo li"));
    
    lenguajes = lenguajes.map(l => l.textContent);

    const btnGanador = d.getElementById("btnGanador");


    btnGanador.addEventListener('click', () => {
        
        const i = Math.floor(Math.random() * lenguajes.length);

        alert(`El ganador es: ${lenguajes[i]}`);

    }) 
}