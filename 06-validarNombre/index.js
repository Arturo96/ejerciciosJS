const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Ingrese nombre: ", nombre => {

    nombre = nombre.trim();

    console.log(`${nombre} ${esNombreValido(nombre) ? 'SI' : 'NO'} es válido`);

    rl.close();
})

const esNombreValido = (nombre) => {
    let exp = /[A-ZÄËÏÖÜÁÉÍÓÚÂÊÎÔÛÀÈÌÒÙÑ][a-záéíóúñ]+(\s[A-ZÄËÏÖÜÁÉÍÓÚÂÊÎÔÛÀÈÌÒÙÑ][a-záéíóúñ]+){1,5}/

    let resultado = nombre.match(exp);

    console.log(resultado);
    if(!resultado) return false;

    if(resultado[0] != nombre) return false;

    return true;
}