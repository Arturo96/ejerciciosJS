const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 18, 12, 45, 67, 80, 14, 17];

console.log(`Ordenados Asc: ${numeros.sort((a, b) => a - b)}`);
console.log(`Ordenados Desc: ${numeros.sort((a, b) => b - a)}`);

const frutas = ["Naranja", "Pera", "Manzana"];

let items = [
	{ name: "Edward", value: 21 },
	{ name: "Sharpe", value: 37 },
	{ name: "And", value: 45 },
	{ name: "The", value: -12 },
	{ name: "Magnetic", value: 13 },
	{ name: "Zeros", value: 37 }
];

console.log(items.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
    
}));