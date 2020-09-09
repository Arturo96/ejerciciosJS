const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Ingresa una cadena: ", cadena => {
    let exp = /\d+/g
    let aux = exp.test(cadena) ? "SI" : "NO"

    console.log(`La cadena ingresada ${aux} contiene números`);

    rl.close()
})