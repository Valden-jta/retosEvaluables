/*
-
- extension Better Comments para visualizar correctamente los comentarios
-
*/
/*
TODO: Crear un único objeto literal con las siguientes claves:

? • nombre : string
? • apellidos : array de string
? • edad : number
? • padres : array de dos objetos literales.

Cada uno tendrá los mismos atributos que el objeto literal inicial, incluidos los padres. A su vez, estos tendrán los mismos atributos que el objeto literal inicial, con la única
salvedad de que estos no tendrán padres.
*/

let persona = {
  nombre: "Javier",
  apellidos: ["de la Torre", "Aragón"],
  edad: 37,
  padres: [
    {
      nombre: "Javier Ricardo",
      apellidos: ["de la Torre", "Adrados"],
      edad: 68,
      padres: [
        { nombre: "Ignacio", apellidos: ["de la Torre", "Zamorano"], edad: 99 },
        { nombre: "Manuela", apellidos: ["Adrados", "Posadas"], edad: 97 },
      ],
    },
    {
      nombre: "Lourdes",
      apellidos: ["Aragon", "keller"],
      edad: 67,
      padres: [
        { nombre: "Julio", apellidos: ["Aragón", "González"], edad: 91 },
        { nombre: "Pilar", apellidos: ["Keller", "Janer"], edad: 100 },
      ],
    },
  ],
};

//TODO • Mostrar por consola el nombre del abuelo por parte de madre

console.log(`• Mostrar por consola el nombre del abuelo por parte de madre:`);
console.log(
  `El nombre del abuelo materno es: ${persona.padres[1].padres[0].nombre}`
);

console.log("------------------------------------------------------");
//TODO • Mostrar el segundo apellido de la abuela por parte de padre

console.log(`• Mostrar el segundo apellido de la abuela por parte de padre:`);
console.log(
  `El segundo apellido de la abuela paterna es: ${persona.padres[0].padres[1].apellidos[1]}`
);

console.log("------------------------------------------------------");
//TODO • Sumar a la edad de la madre, la edad del abuelo por parte de padre (Para ello habrá que acceder a cada valor desde el objeto literal)
console.log(
  `• Sumar a la edad de la madre, la edad del abuelo por parte de padre (Para ello habrá que acceder a cada valor desde el objeto literal:`
);

let edadAbueloP = persona.padres[0].padres[0].edad;
persona.padres[1].edad += edadAbueloP;

console.log(
  `La edad del abuelo sumada a la de la madre es ${persona.padres[1].edad}`
);

console.log("------------------------------------------------------");
//TODO • Intercambiar las edades de los abuelos por parte de padre
console.log(`• Intercambiar las edades de los abuelos por parte de padre:`);

let edades = [
  persona.padres[0].padres[0].edad,
  persona.padres[0].padres[1].edad,
];
edades.reverse();
persona.padres[0].padres[0].edad = edades[0];
persona.padres[0].padres[1].edad = edades[1];
console.log(
  `La edad intercambiada del abuelo paterno es ${persona.padres[0].padres[0].edad}`
);
console.log(
  `La edad intercambiada de la abuela paterna es ${persona.padres[0].padres[1].edad}`
);

console.log("------------------------------------------------------");
//TODO • Añadirle a la abuela por parte de madre el segundo apellido del abuelo por parte de padre
console.log(
  `• Añadirle a la abuela por parte de madre el segundo apellido del abuelo por parte de padre:`
);

let personaCopia = structuredClone(persona); //structuredClone --> hace una copia completa del objeto (spread operator solo hace una copia superficial, no entra a subniveles)
let apellido2Abuelo = personaCopia.padres[0].padres[0].apellidos.pop();
persona.padres[1].padres[1].apellidos.push(apellido2Abuelo);
console.log(
  `Los apellidos modificados de la abuela materna son: ${persona.padres[1].padres[1].apellidos}`
);

console.log("------------------------------------------------------");
//TODO • Eliminar el primer apellido de la madre
console.log(`• Eliminar el primer apellido de la madre:`);

persona.padres[1].apellidos.shift();
console.log(
  `La madre ahora solo tiene el segundo apellido : ${persona.padres[1].nombre} ${persona.padres[1].apellidos}`
);

console.log("------------------------------------------------------");
//TODO • Mostrar la última letra del segundo apellido del abuelo por parte de padre (No se puede contar el número de letras, hay que hacerlo de forma automática)
console.log(
  `• Mostrar la última letra del segundo apellido del abuelo por parte de padre (No se puede contar el número de letras, hay que hacerlo de forma automática):`
);

console.log(
  `El segundo apellido del abuelo paterno es: ${persona.padres[0].padres[0].apellidos[1]}`
);
console.log(
  `La ultima letra del segundo apellido es: "${persona.padres[0].padres[0].apellidos[1].at(
    -1
  )}"`
); // .at(-1): añadiendo -i, se empieza a contar por el final

console.log("------------------------------------------------------");
