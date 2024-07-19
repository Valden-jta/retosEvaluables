//? Se define un vector como un array de números.
//TODO Crea un fichero llamado libreriaVector.js con las siguientes funciones:

//      1. crearVector(n, m):number[]. Crea y devuelve un vector de n números aleatorios que van desde 0 hasta m.
//      2. sumaVector(v1, v2):number[]. Suma dos vectores v1 y v2  si y solo si tienen el mismo numero de elementos y devuelve el vector resultado de dicha suma.
//      3. productoNumeroVector(n, v): number[]. Multiplica el vector v por el numero y devuelve el vector resultado de dicho producto.
//      4. restaVector(v1, v2): number[]. Resta dos vectores v1 y v2  si y solo si tienen el mismo numero de elementos y devuelve el vector resultado de dicha resta.
//      5. productoVector(v1, v2): Multiplica dos vectores v1 y v2 si y solo si tienen el mismo número de elementos y devuelve el vector resultado de dicho producto.
//      6. Redefine la función sumaVector para implementarla utilizando el método .forEach suponiendo que tanto v1 como v2 tienen el mismo número de elementos.
//      7. Redefine la función sumaVector implementándola utilizando el método .map suponiendo que tanto v1 como v2 tienen el mismo número de elementos.
//      8. Implementa la función filtrarPares(v) que devuelva el vector resultante de eliminar los número impares almacenados en v, utilizando el método .filter.
//      9. Implementa la función sumatorio(v) que devuelve la suma de los elementos del vector v usando el método .reduce.

//* ---------------------------------------------- DECLARACIÓN DE FUNCIONES ---------------------------------------------- *\\
//* ====================================================================================================================== *\\

// Con estas funciones creamos valores aleatorios para construir los arrays en main
const indice = () => Math.floor(Math.random() * 5) + 1;
const valores = () => Math.floor(Math.random() * 1001);

const crearVector = (n, m) => {
  let vector = [];
  for (let i = 0; i < n; i++) {
    vector[i] = Math.floor(Math.random() * m);
  }
  return vector;
};

//* CON BUCLES CLÁSICOS
const sumaVector = (v1, v2) => {
  if (v1.length != v2.length) {
    return "Los vectores no tienen la misma longitud";
  } else {
    let resultado = [];
    for (let i = 0; i < v1.length; i++) {
      resultado[i] = v1[i] + v2[i];
    }
    return resultado;
  }
};

//* CON .forEach
const sumaVector2 = (v1, v2) => {
  let resultado = []; // no devuelve nada, por eso hay que crear un array previamente
  v1.forEach((valor, indice) => {
    // .forEach unicamente ejecuta la función definida (callback) en cada posición del array
    resultado[indice] = valor + v2[indice]; // no afecta a los arrays originales
  });
  return resultado;
};

//* CON .map
const sumaVector3 = (v1, v2) => v1.map((valor, indice) => valor + v2[indice]);
//Desglose:
// const sumaVector3 = (v1, v2) => {
//         v1.map((valor, indice) => {                  # .map ejecuta la callback, e inserta el resultado en un nuevo array, sin modificar los originales
//                  valor + v2[indice]
//                 })
//         };

const productoNumeroVector = (n, v) => {
  let resultado = [];
  for (let i = 0; i < v.length; i++) {
    resultado[i] = v[i] * n;
  }
  return resultado;
};

// const productoVector = (v1, v2) => v1.map((valor, indice) => valor - v2[indice]);
const restaVector = (v1, v2) => {
  if (v1.length != v2.length) {
    return "Los vectores no tienen la misma longitud";
  } else {
    let resultado = [];
    for (let i = 0; i < v1.length; i++) {
      resultado[i] = v1[i] - v2[i];
    }
    return resultado;
  }
};

// const productoVector = (v1, v2) => v1.map((valor, indice) => valor * v2[indice]);
const productoVector = (v1, v2) => {
  if (v1.length != v2.length) {
    return "Los vectores no tienen la misma longitud";
  } else {
    let resultado = [];
    for (let i = 0; i < v1.length; i++) {
      resultado[i] = v1[i] * v2[i];
    }
    return resultado;
  }
};

const filtrarPares = (v) => v.filter((valor) => valor % 2 == 0);
// const filtrarPares = (v) => {
//         let resultado = [];
//   for (let i = 0; i < v.length; i++) {
//     if (v[i] % 2 == 0) {
//       resultado.push(v[i]);
//     }
//   }
//   return resultado;
// };

const sumatorio = (v) => v.reduce((acumulador, valor) => acumulador + valor);
// const sumatorio = (v) => {
//   let acumulador = 0;
//   for (let i = 0; i < v.length; i++) {
//     acumulador += v[i];
//   }
//   return acumulador;
// };

//* ---------------------------------------------- EXPORTAR LA LIBRERIA ---------------------------------------------- *\\
//* ================================================================================================================== *\\

module.exports = {
  crearVector,
  sumaVector,
  sumaVector2,
  sumaVector3,
  productoNumeroVector,
  restaVector,
  productoVector,
  filtrarPares,
  sumatorio,
  indice,
  valores,
};
