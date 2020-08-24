const readline = require('readline');

const esPalindromo = (frase) => {

    frase = frase.toLowerCase();

    let n = frase.length;

    for (let i = 0; i < n; i++) {
        if(frase[i] != frase[n - i - 1]) return false;
    }

    return true;
}

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Ingrese frase: ', frase => {
    console.log(`${frase} ${esPalindromo(frase) ? 'SI' : 'NO' } es palíndromo`);
    // rl.close();
})

rl.on('line', (frase) => {
    console.log(`${frase} ${esPalindromo(frase) ? 'SI' : 'NO' } es palíndromo`);
  });

