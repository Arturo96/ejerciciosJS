class Pelicula {

	constructor(id, titulo, director, paises, generos, puntaje) {
		this.id = id;
		this.titulo = titulo;
		this.director = director;
		this.paises = paises;
		this.generos = generos;
		this.puntaje = puntaje;
    }
    
    static getGenerosAceptados() {
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary ","Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
    }

    mostrarFichaTecnica() {
        
    }
}
