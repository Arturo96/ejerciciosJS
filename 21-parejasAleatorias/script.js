let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
    parejas = []; 

console.log(numeros);

const crearParejas = () => {
    let indice = 0;
    do {
        parNumeros = [];
        for (let i = 0; i < 2; i++) {
            indice = Math.floor(Math.random() * numeros.length);  
            parNumeros.push(numeros.splice(indice, 1)[0]);
        }
        parNumeros = parNumeros.sort((a, b) => a - b);
        parejas.push(parNumeros);
    } while (numeros.length != 0);
}

crearParejas();

parejas.forEach(pareja => console.log(pareja))

