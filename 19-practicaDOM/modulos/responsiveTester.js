
const d = document;

export const responsiveTester = () => {

    const btnProbar = d.getElementById('btnProbar'),
          btnCerrar = d.getElementById('btnCerrar');

    let ventana;

    btnProbar.addEventListener('click', e => {
        e.preventDefault();
        const URLPagina = d.getElementById("txtURL").value,
        anchoPagina = d.getElementById("txtAncho").value,
        altoPagina = d.getElementById("txtAlto").value;

        if(!URLPagina || !anchoPagina || !altoPagina) {
            alert("Por favor, llena los campos requeridos");
            return false;
        }

        ventana = open(URLPagina, "nuevaVentana", `width=${anchoPagina},height=${altoPagina}` );
    })

    btnCerrar.addEventListener('click', e => {
        e.preventDefault();
        if(ventana) {
            ventana.close();
        }
    })
}