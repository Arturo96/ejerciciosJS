const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const factorial = (num) => {
    num = Number(num) || 0;

    let f = num;
    for (let i = num - 1; i >= 2; i--) {
        f *= i;
    }

    if(num === 0) f = 1;

    if(num < 0) f = 'indefinido'

    console.log(`El factorial de ${num} es: ${f}`);
}

rl.question("Ingrese número: ", num => {
    factorial(num)
})

rl.on('line', num => {
    factorial(num)
})

