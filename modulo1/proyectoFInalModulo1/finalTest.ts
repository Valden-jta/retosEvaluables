import { Professional } from "./professional";
import { Movie } from "./movie";
import { Imdb } from "./imdb";
const readlineSync = require('readline-sync');

console.log("Vamos a crear un nuevo profesional!!");

let name:string = readlineSync.question('Nombre: ');
let age:number = readlineSync.questionInt('Edad(anyos): ');
let weight:number = readlineSync.questionInt('Peso(kg): ');
let height:number = readlineSync.questionInt('altura(cm): ');
let opcionRetirado:string = readlineSync.question('En activo(si/no): ');
let isRetired:boolean = opcionRetirado.toLowerCase() === 'no';
let nationality:string = readlineSync.question('nacionalidad: ');
let oscarsNumber:number = readlineSync.questionInt('Numero de Oscars: ');
let listaProfesiones:string[] = ['Actor','Actriz(0)', ' Director(1)', ' guionista(2): '];
console.log(`Profesion (elige el numero): `);
let opcionProfesion:number = readlineSync.questionInt(listaProfesiones);
let profesion = listaProfesiones[opcionProfesion];
let nuevoProfesional:Professional = new Professional(name,age,weight,height,isRetired,nationality,oscarsNumber,profesion);

// resumen
nuevoProfesional.printProfessional();

// importamos el fichero imdbBBDD.json
let imdb = new Imdb([]);
imdb = imdb.obtenerInstanciaIMDB('imdbBBDD.json');


// Vamos a determinar en que pelicula insertar al profesional
let listaPeliculas:string[] = imdb.peliculas.map((pelicula:Movie, indice:number) => `(${indice}) ${pelicula.title}\n`);
console.log(`Pelicula (elige el número):`);
let opcionPeliculas:number = readlineSync.questionInt(listaPeliculas);
let peliculaElegida:string = listaPeliculas[opcionPeliculas]
console.log('Pelicula :' + peliculaElegida);


// Vamos a insertarlo en su profesión correspondiente (actor, director, guionista)
if (opcionProfesion == 0) {
    imdb.peliculas[opcionPeliculas].actors.push(nuevoProfesional);
    imdb.escribirEnFicheroJSON('imdbBBDD.json');
} else if (opcionProfesion == 1) {
    imdb.peliculas[opcionPeliculas].director = nuevoProfesional;
    imdb.escribirEnFicheroJSON('imdbBBDD.json');
} else {
    imdb.peliculas[opcionPeliculas].writer= nuevoProfesional;
    imdb.escribirEnFicheroJSON('imdbBBDD.json');
}

imdb.peliculas[opcionPeliculas].printMovie()