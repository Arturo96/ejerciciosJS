const d = document,
    slRegion = d.getElementById("slRegion"),
    slMunicipio = d.getElementById("slMunicipio");

addEventListener("DOMContentLoaded", () => {
    const URLRegiones = "https://api-sepomex.hckdrk.mx/query/get_estados";

    let html = `<option value="default">Seleccione una opción...</option>`;

    cargarAJAX(URLRegiones, "estado")

})

slRegion.addEventListener('change', e => {
    const URLMunicipios = `https://api-sepomex.hckdrk.mx/query/get_municipio_por_estado/${e.target.value}`;

    let html = `<option value="default">Seleccione una opción...</option>`;

    if(e.target.value === 'default') {
        slMunicipio.innerHTML = html;
        return;
    } 

    cargarAJAX(URLMunicipios, "municipios");

})

const cargarAJAX = async (URL, recurso) => {
    let html = `<option value="default">Seleccione una opción...</option>`;

    try {
        const res = await fetch(URL),
            json = await res.json(),
            datos = await json.response[recurso].sort();

            if(!res.ok) throw res;

            datos.forEach(dato => {
                html += `<option value="${dato}">${dato}</option>`
            });

            
    } catch (err) {
        console.error(err);
    } finally {
        if(recurso == "estado") slRegion.innerHTML = html;
        else slMunicipio.innerHTML = html;
    }
}