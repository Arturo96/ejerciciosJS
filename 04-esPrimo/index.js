const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const esPrimo = (num) => {
    num = Number(num) || 0;

    if (num <= 0) {
        console.log('Número no válido');
    } else {
        let divisores = 0;

        for (let i = num - 1; i >= 2; i--) {
            if(num % i == 0) divisores++;
        }

        let aux = divisores == 0 ? 'SI' : 'NO'

        console.log(`El numero ${num} ${aux} es primo`);
    }

}

rl.question("Ingrese número: ", num => {
    esPrimo(num)
})

rl.on('line', num => {
    esPrimo(num)
})

