"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var professional_1 = require("./professional");
var imdb_1 = require("./imdb");
var readlineSync = require('readline-sync');
console.log("Vamos a crear un nuevo profesional!!");
var name = readlineSync.question('Nombre: ');
var age = readlineSync.questionInt('Edad(anyos): ');
var weight = readlineSync.questionInt('Peso(kg): ');
var height = readlineSync.questionInt('altura(cm): ');
var opcionRetirado = readlineSync.question('En activo(si/no): ');
var isRetired = opcionRetirado.toLowerCase() === 'no';
var nationality = readlineSync.question('nacionalidad: ');
var oscarsNumber = readlineSync.questionInt('Numero de Oscars: ');
var listaProfesiones = ['Actor', 'Actriz(0)', ' Director(1)', ' guionista(2): '];
console.log("Profesion (elige el numero): ");
var opcionProfesion = readlineSync.questionInt(listaProfesiones);
var profesion = listaProfesiones[opcionProfesion];
var nuevoProfesional = new professional_1.Professional(name, age, weight, height, isRetired, nationality, oscarsNumber, profesion);
// resumen
nuevoProfesional.printProfessional();
// importamos el fichero imdbBBDD.json
var imdb = new imdb_1.Imdb([]);
imdb = imdb.obtenerInstanciaIMDB('imdbBBDD.json');
// Vamos a determinar en que pelicula insertar al profesional
var listaPeliculas = imdb.peliculas.map(function (pelicula, indice) { return "(".concat(indice, ") ").concat(pelicula.title, "\n"); });
console.log("Pelicula (elige el n\u00FAmero):");
var opcionPeliculas = readlineSync.questionInt(listaPeliculas);
var peliculaElegida = listaPeliculas[opcionPeliculas];
console.log('Pelicula :' + peliculaElegida);
// Vamos a insertarlo en su profesión correspondiente (actor, director, guionista)
if (opcionProfesion == 0) {
    imdb.peliculas[opcionPeliculas].actors.push(nuevoProfesional);
    imdb.escribirEnFicheroJSON('imdbBBDD.json');
}
else if (opcionProfesion == 1) {
    imdb.peliculas[opcionPeliculas].director = nuevoProfesional;
    imdb.escribirEnFicheroJSON('imdbBBDD.json');
}
else {
    imdb.peliculas[opcionPeliculas].writer = nuevoProfesional;
    imdb.escribirEnFicheroJSON('imdbBBDD.json');
}
imdb.peliculas[opcionPeliculas].printMovie();
