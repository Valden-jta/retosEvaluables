//TODO Crea un nuevo fichero que llame a las funciones definidas en el fichero libreríaVector.js y prueba todas sus funciones.

//* ---------------------------------------------- IMPORTAR LIBRERÍAS ---------------------------------------------- *\\
//* ================================================================================================================ *\\

let funciones = require("./tema5_evaluable_libreriaVectores");

//* ---------------------------------------------- MAIN ---------------------------------------------- *\\
//* ================================================================================================== *\\

// Prueba a ejecutarlo varias veces para ver como varían los resultados

console.log("====== 1. CREAR VECTOR =======");
console.log("Nuevo vector");
console.log(funciones.crearVector(funciones.indice(), funciones.valores()));
console.log("");

console.log("====== 2. SUMAR VECTORES (BUCLES CLÁSICOS)=======");
let vector1 = funciones.crearVector(funciones.indice(), funciones.valores());
console.log(vector1);
let vector2 = funciones.crearVector(funciones.indice(), funciones.valores());
console.log(vector2);
console.log("Suma de vectores (bucle for):");
console.log(funciones.sumaVector(vector1, vector2));
console.log("");

console.log("====== 3. MUTLIPLICAR VECTOR =======");
let vector = funciones.crearVector(funciones.indice(), funciones.valores());
let numero = funciones.valores();
console.log("Vector:");
console.log(vector);
console.log(`Vector multiplicado x ${numero}`);
console.log(funciones.productoNumeroVector(numero, vector));
console.log("");

console.log("====== 4. RESTAR VECTORES =======");
let vector3 = funciones.crearVector(funciones.indice(), funciones.valores());
console.log(vector3);
let vector4 = funciones.crearVector(funciones.indice(), funciones.valores());
console.log(vector4);
console.log("Resta de vectores:");
console.log(funciones.restaVector(vector3, vector4));
console.log("");

console.log("====== 5. MULTIPLICAR VECTORES =======");
let vector5 = funciones.crearVector(funciones.indice(), funciones.valores());
console.log(vector5);
let vector6 = funciones.crearVector(funciones.indice(), funciones.valores());
console.log(vector6);
console.log("Producto de vectores:");
console.log(funciones.productoVector(vector5, vector6));
console.log("");

console.log("====== 6. SUMA VECTORES (.forEach) =======");
let vector7 = funciones.crearVector(5, funciones.valores());
console.log(vector7);
let vector8 = funciones.crearVector(5, funciones.valores());
console.log(vector8);
console.log("Suma de vectores (función con forEach):");
console.log(funciones.sumaVector2(vector7, vector8));
console.log("");

console.log("====== 7. SUMA VECTORES (.map) =======");
let vector9 = funciones.crearVector(5, funciones.valores());
console.log(vector9);
let vector10 = funciones.crearVector(5, funciones.valores());
console.log(vector10);
console.log("Suma de vectores (función con .map):");
console.log(funciones.sumaVector3(vector9, vector10));
console.log("");

console.log("====== 8. FILTRAR PARES =======");
let vector11 = funciones.crearVector(funciones.indice(), funciones.valores());
console.log(vector11);
console.log("Valores filtrados:");
console.log(funciones.filtrarPares(vector11));
console.log("");

console.log("====== 9. SUMATORIO =======");
let vector12 = funciones.crearVector(funciones.indice(), funciones.valores());
console.log(vector12);
console.log("Sumatorio:");
console.log(funciones.sumatorio(vector12));
