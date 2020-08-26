let numeros = [1,3,3,4,4,5,6,5,3];

console.log(numeros.filter((numero, i, self) => self.indexOf(numero) == i))