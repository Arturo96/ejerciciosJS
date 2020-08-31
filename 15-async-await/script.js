const numeroAlCuadrado = (numero) => {
    return new Promise((resolve, reject) => {
        if(typeof (numero) === "string") {
            reject("Error: el valor introducido no es un número");
        } else {
            resolve(numero * numero);
        }
    })
}

const imprimirNumero = async(numero) => {
    try {
        let result = await numeroAlCuadrado(numero);
        console.log(result);
    } catch(err) {
        console.error(err);
    }
}

imprimirNumero(5)