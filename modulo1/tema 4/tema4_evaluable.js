/*
• Teniendo la siguiente estructura de objeto literal:
persona =
        {
"nombre" : string,
"apellido" : string,
"anyoNacimiento" : number,
"aficiones": array of string,
"dni": { "anyoExpedicion" : number, "lugarNacimento": string},
"colorPelo" : string
         }
*/
// • Crear un array denominado personas con 4 objetos de tipo persona.

let personas = [
  {
    nombre: "Marta",
    apellido: "Rodriguez",
    anyoNacimiento: 1992,
    aficiones: ["viajar", "dormir", "gatos"],
    dni: { anyoExpedicion: 2021, lugarNacimento: "Paracuellos del Jarama" },
    colorPelo: "castaño",
  },
  {
    nombre: "Sandra",
    apellido: "Montes",
    anyoNacimiento: 2001,
    aficiones: ["música", "compras", "bares"],
    dni: { anyoExpedicion: 2009, lugarNacimento: "Leganés" },
    colorPelo: "rubio",
  },
  {
    nombre: "Diego",
    apellido: "Carpintero",
    anyoNacimiento: 1980,
    aficiones: ["comics", "videojuegos", "comer"],
    dni: { anyoExpedicion: 2013, lugarNacimento: "Madrid" },
    colorPelo: "negro",
  },
  {
    nombre: "Roberto",
    apellido: "Parra",
    anyoNacimiento: 1977,
    aficiones: ["Tik Tok", "gimnasio", "dormir"],
    dni: { anyoExpedicion: 2021, lugarNacimento: "Madrid" },
    colorPelo: "negro",
  },
];

// TODO • Mostrar todos las propiedades y su valor de un objeto persona utilizando for…in
console.log("------------------");
console.log(
  "Mostrar todos las propiedades y su valor de un objeto persona utilizando for…in."
);

let selectorPersona = personas[Math.floor(Math.random() * 4)]; //elige una persona al azar

for (let atributo in selectorPersona) {
  console.log(`${atributo} : ${selectorPersona[atributo]}`);
}

// TODO • Mostrar todos los elementos del array personas en la consola con un bucle for, con un bucle while y con un bucle for...of
console.log("------------------");
console.log(
  "Mostrar todos los elementos del array personas en la consola con un bucle for, con un bucle while y con un bucle for...of."
);

console.log("----");
console.log("FOR");

for (let i = 0; i < personas.length; i++) {
  console.log(personas[i]);
}

console.log("----");
console.log("WHILE");

let i = 0;
while (i < Array.length) {
  console.log(personas[i]);
  i++;
}

console.log("----");
console.log("FOR...OF");

for (let persona of personas) {
  console.log(persona);
}

//TODO • Mostrar en la consola javascript los elementos del array persona que cumplan que su año de nacimiento  esté entre 1978 y 2000. Hacerlo con un bucle for,  while y for…of.
console.log("------------------");
console.log(
  "Mostrar en la consola javascript los elementos del array persona que cumplan que su año de nacimiento  esté entre 1978 y 2000. Hacerlo con un bucle for,  while y for…of."
);

console.log("FOR");

for (let i = 0; i < personas.length; i++) {
  if (personas[i].anyoNacimiento > 1977 && personas[i].anyoNacimiento < 2001) {
    console.log(personas[i]);
  }
}

console.log("----");
console.log("WHILE");
i = 0;
while (i < personas.length) {
  if (personas[i].anyoNacimiento > 1977 && personas[i].anyoNacimiento < 2001) {
    // si ponemos esta condicion como condicion de bucle, parará, no sirve para recorrer el array, solo para seleccionar elementos
    console.log(personas[i]);
  }
  i++;
}
console.log("----");
console.log("FOR...OF");

let impresion;
for (let persona of personas) {
  persona.anyoNacimiento > 1977 && persona.anyoNacimiento < 2001
    ? (impresion = persona)
    : (impresion = "");
  console.log(impresion);
}

//TODO • Mostrar el siguiente mensaje:
//     - “Tu edad está entre 40 y 20 años” para todos los elementos del array que cumple la condición del apartado anterior.
//     - “Tu edad no está entre 40 y 20” para el resto de los casos.

console.log("------------------");
console.log(
  "Mostrar el siguiente mensaje:\n- “Tu edad está entre 40 y 20 años” para todos los elementos del array que cumple la condición del apartado anterior.\n- “Tu edad no está entre 40 y 20” para el resto de los casos."
);
console.log("");
for (let persona of personas) {
  let mensaje;
  persona.anyoNacimiento > 1977 && persona.anyoNacimiento < 2001
    ? (mensaje = `${persona.nombre}, tu edad está entre 40 y 20 años`)
    : (mensaje = `${persona.nombre}, tu edad no está entre 40 y 20 años`);
  console.log(mensaje);
}

//TODO • Agregar la afición “jugar a la play” a todos los elementos del array personas utilizando el bucle for y for…of.
console.log("------------------");
console.log(
  "Agregar la afición “jugar a la play” a todos los elementos del array personas utilizando el bucle for y for…of."
); //comentar una opcion u otra para mostrar el resultado correspondiente

console.log("----");
console.log("FOR");
for (let i = 0; i < personas.length; i++) {
  personas[i].aficiones.push("Jugar a la play");
  console.log(personas[i]);
}

// console.log('----');
// console.log('FOR...OF');

// for (let persona of personas) {
//     persona.aficiones.push('Jugar a la play');
//     console.log(persona);
// }
