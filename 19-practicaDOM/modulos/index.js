import { camaraWeb } from "./camaraWeb.js";
import { devicesDetected } from "./devicesDetected.js";
import { setEsfera } from "./esfera.js"
import { estadoConexion } from "./estadoConexion.js";
import { filtroImagenes } from "./filtroImagenes.js";
import { geolocalizacion } from "./geolocalizacion.js";
import { responsiveJS } from "./responsiveJS.js";
import { responsiveTester } from "./responsiveTester.js";
import { temporizador } from "./temporizador.js";

export const principal = () => {
    setEsfera();
    temporizador();
    responsiveJS();
    responsiveTester();
    devicesDetected();
    estadoConexion();
    camaraWeb();
    geolocalizacion();
    filtroImagenes();
}