const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Ingrese cadena: ', cadena => {
    contarVocYCon(cadena);

    rl.close();
})

rl.on('line', cadena => {

})

const contarVocYCon = (cadena) => {
    let exp = new RegExp("[a-zA-Z]");
    let numVocales = 0, numConsonantes = 0;

    cadena.split("").forEach(c => {
        if(exp.test(c)) {
            let esVocal = new RegExp("[aeiouAEIOUáéíóúÁÉÍÓÚ]");

            console.log(`${c}: ${esVocal.test(c)}`);

            if(esVocal.test(c)) {
                numVocales++;
            } else {
                numConsonantes++;
            }

           
        }
    });

    console.log(`Vocales: ${numVocales}, Consonantes: ${numConsonantes}`);

}