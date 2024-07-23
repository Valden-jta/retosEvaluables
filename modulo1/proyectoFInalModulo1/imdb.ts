import "reflect-metadata";
import "es6-shim";
import { plainToClass, plainToClassFromExist } from "class-transformer";
const fs = require("fs"); //para importar la funcionalidad writeFileSync Y readFileSync
import { Movie } from "./movie";
import { Professional } from "./professional";

export class Imdb {
  // Atributos
  public peliculas: Movie[];
  // Constructor
  constructor(peliculas: Movie[]) {
    this.peliculas = peliculas;
  }

  // Getters

  // Setters

  // Métodos públicos
  public escribirEnFicheroJSON(nombreFichero: string): void {
    fs.writeFileSync(nombreFichero, JSON.stringify(this, null, 3));
  }

  //   Al exportar el objeto con el la función anterior, exportamos los datos únicamente, por lo que al recuperarlos
  //   no recuperamos un objeto, sino una colección de datos que hay que asignar a un nuevo objeto de una clase.

//   public obtenerInstanciaIMDB(nombreFichero: string): Imdb {
//     let data = JSON.parse(fs.readFileSync(nombreFichero, "utf8"));
//     let importedMovies = data.peliculas.map((pelicula: any) => {
//       // Creamos el objeto Imdb (Movie[], por eso usamos .map). Utilizamos Object.assign para asignar los valores del json
//       // a las instancias de Movie que se van creando. Solo es preciso hacer esto con aquellos datos que sean complejos,
//       // como actors, director o writer, que son datos de tipo Professional. El resto son datos primitivos que se asignan automáticamente
//       let movie: Movie = Object.assign(
//         new Movie("", 0, "", ""), // parametro target
//         pelicula //parametro source
//       );
//       movie.actors = pelicula.actors.map((actor: any) => {
//         return Object.assign(
//           new Professional("", 0, 0, 0, false, "", 0, ""),
//           actor
//         );
//         // se hace asi porque es Professional[]
//       });
//       movie.director = Object.assign(
//         new Professional("", 0, 0, 0, false, "", 0, ""), // se hace asi porque es Professional
//         pelicula.director
//       );
//       movie.writer = Object.assign(
//         new Professional("", 0, 0, 0, false, "", 0, ""), // se hace asi porque es Professional
//         pelicula.writer
//       );
//       return movie;
//     });
//     let imbdInstance: Imdb = new Imdb(importedMovies);
//     return imbdInstance;
//   }
// Esta es la misma funcion usando la librería class transformer
    public obtenerInstanciaIMDB(nombreFichero: string): Imdb {
      let data = JSON.parse(fs.readFileSync(nombreFichero, "utf8"));                                     //  nos devuelve un objeto js, en este caso un objeto que contiene un array
      let peliculas: Movie[] = data.peliculas.map((pelicula:any) => plainToClass(Movie, pelicula));      //  convertimos los datos del json en objetos tipo Movie, y lo incluimos en un array para generara un Movie[]
      let imdbInstance: Imdb = new Imdb(peliculas);                                                      //  Ahora se puede usar ese array para instanciar un nuevo objeto Imdb
      return imdbInstance;
  }

//   Métodos privados
}

//? =============================================================================================
//? Descripción de las funciones JSON.stringify(), writeFileSync(), readFileSync() y JSON.parse()

// //* --- Stringify

// JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON.

// Sintaxis:
// JSON.stringify(valor[, replacer[, space]])

// Parámetros:
// - valor: El valor que quieres convertir a una cadena JSON.

// - replacer (opcional): Una función que altera el comportamiento del proceso de stringificación, o un array de cadenas y
//   números que actúa como una lista blanca para seleccionar las propiedades del valor objeto que se incluirán en la cadena JSON.
//   eL valor null no selecciona ninguna propiedad, las pasa todas (útil para pasar todo un objeto y darle espacios e indentación)

// - space (opcional): Un String o Number que controla la indentación del resultado. si el valor del parametro es ninguo o 0, se
//   crea una cadena sin espacios. Al poner un número automáticamente añade indentación al string

//? let data:string = JSON.stringify(imdb,null,3); // lo usamos para escribir el fichero imdbDDBB
// Estamos creando una variable 'data' de tipo string que alberga el objeto imdb(movie[]) y lo convierte en una cadena de texto,
// y además le estams dando formato al texto.

//* --- ESCRITURA DE NUEVO ARCHIVO: writeFileSync
// fs.writeFileSync(): función que escribe datos en un archivo de forma SÍNCRONA.

// Sintaxis:
// const fs = require('fs'); ---> no hace falta instalarlo, viene incluido en Node.js

// fs.writeFileSync(file, data[, options])

// Parámetros:
// - file: Ruta del archivo donde quieres escribir. Si el archivo no existe, se creará.
// - data: Los datos que quieres escribir. Puede ser un string, un buffer, o un objeto. Si es un objeto, se convertirá a un string JSON.
// - options (opcional): Un objeto que puede contener varias opciones, como el encoding, el modo y el flag.

//? fs.writeFileSync('imdbDDBB.json', data);
// Estamos creando un fichero json (imdbDDBB.json) con la información de data (movie[] convertido a string)

//* --- LECTURA DE NUEVO ARCHIVO: writeFileSync

// Requerimos el módulo 'fs' de Node.js
// const fs = require('fs');

// fs.readFileSync() : función que lee datos de un archivo de forma sincrónica.

// Sintaxis:
// const fs = require('fs');

// fs.readFileSync(path[, options])

// Parámetros:
// - path: Ruta del archivo que quieres leer.
// - options (opcional): Un objeto que puede contener varias opciones, como el encoding.

//* --- IMPORTAR JSON A OBJETO: JSON.parse()
// JSON.parse() : función que convierte una cadena de texto JSON en un objeto o valor de JavaScript.

// Sintaxis:
// JSON.parse(texto[, reviver])

// Parámetros:
// - texto: La cadena de texto JSON que quieres convertir en un objeto o valor de JavaScript.
// - reviver (opcional): Una función que transforma el resultado. Se llama para cada elemento del objeto.

//? let imbdDDBB:Imdb = JSON.parse(fs.readFileSync('imdbDDBB.json'));
// Estamos importando a un objeto tipo imdb(Movie[]) el json con la información de las películas. Con JSON.parse()
// convertimos los valores de string a valores de JavaScript (en este caso, un array de peliculas(Movie))

//* --- Convertir los datos a atributos de clase -->requiere es6 ()
//? https://barcelonageeks.com/como-convertir-un-objeto-json-dentro-de-la-clase-typescript/
// librería class transformer: https://www.npmjs.com/package/class-transformer -> metodo plainToClass()
