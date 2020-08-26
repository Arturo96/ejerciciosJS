
const numeros = [1,9,17,2,4,67,8,13,5];

let pares = numeros.filter(numero => numero % 2 == 0);
let impares = numeros.filter(numero => numero % 2 != 0);

console.log(`Pares: ${pares}, Impares: ${impares}`);