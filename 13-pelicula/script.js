let id, pelicula, director, anio, paises;

// Paises
do {
    paises = prompt("Paises: ") || '';
    if(!esIdValido(id)) alert('Los paises deben estar en arreglo.')
} while (!esIdValido(id));

// Película
do {
    id = prompt("Id de la pelicula: ") || '';
    if(!esIdValido(id)) alert('El id debe tener 9 carácteres')
} while (!esIdValido(id));

// Titulo
do {
    pelicula = prompt("Título de la pelicula: ") || '';
    if(!pelValida(pelicula)) alert('La película debe tener entre 1 y 100 carácteres.')
} while (!pelValida(pelicula));

// Director
do {
    director = prompt("Director de la pelicula: ") || '';
    if(!dirValido(director)) alert('El director debe tener entre 5 y 100 carácteres.')
} while (!dirValido(director));

// Año
do {
    anio = prompt("Año de la pelicula: ") || '';
    if(!anioValido(anio)) alert('El año debe tener 4 digitos y ser real.')
} while (!anioValido(anio));


