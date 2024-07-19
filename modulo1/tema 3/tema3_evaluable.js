//• Crear un array de personas con 4 objetos de tipo persona.

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
    anyoNacimiento: 2000,
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
    anyoNacimiento: 1979,
    aficiones: ["Tik Tok", "gimnasio", "dormir"],
    dni: { anyoExpedicion: 2021, lugarNacimento: "Madrid" },
    colorPelo: "negro",
  },
];

//? Tomando como base el array anterior:
// TODO • Mostrar el nombre de todos aquellas personas del array que tengan el pelo castaño.
console.log(
  "Mostrar el nombre de todos aquellas personas del array que tengan el pelo castaño."
);
console.log("");
// * METODO 1
console.log("METODO 1");
if (personas[0].colorPelo === "castaño") {
  console.log(`${personas[0].nombre} tiene el pelo castaño`);
}

if (personas[1].colorPelo === "castaño") {
  console.log(`${personas[1].nombre} tiene el pelo castaño`);
}

if (personas[2].colorPelo === "castaño") {
  console.log(`${personas[2].nombre} tiene el pelo castaño`);
}

if (personas[3].colorPelo === "castaño") {
  console.log(`${personas[3].nombre} tiene el pelo castaño`);
}

console.log("");
// * METODO 2
console.log("METODO 2");
//con condicionales ternarios

personas[0].colorPelo === "castaño"
  ? console.log(`${personas[0].nombre} tiene el pelo castaño`)
  : "";
personas[1].colorPelo === "castaño"
  ? console.log(`${personas[1].nombre} tiene el pelo castaño`)
  : "";
personas[2].colorPelo === "castaño"
  ? console.log(`${personas[2].nombre} tiene el pelo castaño`)
  : "";
personas[3].colorPelo === "castaño"
  ? console.log(`${personas[3].nombre} tiene el pelo castaño`)
  : "";

console.log("");
// * METODO 3
// utilizando metodos de los arrays para recorrer y seleccionar los datos con un condicional ternario
console.log("METODO 3");

let castaños = personas
  .map((persona) => (persona.colorPelo == "castaño" ? persona.nombre : null))
  .filter(Boolean);

// map devuelve un nuevo array
// la funcion flecha comprueba si el color de pelo es castaño e inserta el nombre en el nuevo array, o sino inserta null
// filter(Boolean) limpia los valores null del array

console.log(castaños + " tiene/tienen el pelo castaño");

console.log("-----------------------");

// TODO • Mostrar la edad de todos los que sean mayores de 30.
console.log("Mostrar la edad de todos los que sean mayores de 30.");
console.log("");
// * METODO 1
console.log("METODO 1");

let anyoActual = new Date().getFullYear();

if (anyoActual - personas[0].anyoNacimiento > 30) {
  console.log(
    `La edad de ${personas[0].nombre} es de ${
      anyoActual - personas[0].anyoNacimiento
    }`
  );
}
if (anyoActual - personas[1].anyoNacimiento > 30) {
  console.log(
    `La edad de ${personas[1].nombre} es de ${
      anyoActual - personas[1].anyoNacimiento
    }`
  );
}
if (anyoActual - personas[2].anyoNacimiento > 30) {
  console.log(
    `La edad de ${personas[2].nombre} es de ${
      anyoActual - personas[2].anyoNacimiento
    }`
  );
}
if (anyoActual - personas[3].anyoNacimiento > 30) {
  console.log(
    `La edad de ${personas[3].nombre} es de ${
      anyoActual - personas[3].anyoNacimiento
    }`
  );
}

console.log("");
// * METODO 2
console.log("METODO 2");
//con condicionales ternarios

anyoActual - personas[0].anyoNacimiento > 30
  ? console.log(
      personas[0].nombre +
        ": " +
        (anyoActual - personas[0].anyoNacimiento) +
        " años"
    )
  : "";
anyoActual - personas[1].anyoNacimiento > 30
  ? console.log(
      personas[1].nombre +
        ": " +
        (anyoActual - personas[1].anyoNacimiento) +
        " años"
    )
  : "";
anyoActual - personas[2].anyoNacimiento > 30
  ? console.log(
      personas[2].nombre +
        ": " +
        (anyoActual - personas[2].anyoNacimiento) +
        " años"
    )
  : "";
anyoActual - personas[3].anyoNacimiento > 30
  ? console.log(
      personas[3].nombre +
        ": " +
        (anyoActual - personas[3].anyoNacimiento) +
        " años"
    )
  : "";

console.log("");
// * METODO 3
// utilizando metodos de los arrays para recorrer y seleccionar los datos con un condicional ternario
console.log("METODO 3");

let mayores30 = personas
  .map((persona) => {
    let edad = anyoActual - persona.anyoNacimiento;
    return edad > 30 ? `${persona.nombre}: ${edad}` : null; // en este caso, al tener más de una sentencia, es necesario utilizar llaves y return para devolver los valores al array
  })
  .filter(Boolean);

console.log(mayores30);

console.log("-----------------------");
// TODO • Mostrar el lugar de nacimiento de todos los que tengan el pelo negro y el dni caducado, o sean  menores de edad y su afición(se puede usar con includes()) sea comer o dormir.
console.log(
  "Mostrar el lugar de nacimiento de todos los que tengan el pelo negro y el dni caducado, o sean  menores de edad y su afición(se puede usar con includes()) sea comer o dormir."

);

// Caducidad DNI: EDAD((anyoActual - personas[].anyoNacimiento) < 5 && CADUCIDAD(anyoActual - personas[].dni.anyoExpedicion > 2)) .... / edad < 30 --> 5 años/ edad < 70 --> 10 años

console.log("");
console.log("METODO 1");
// * METODO 1

if (
  personas[0].colorPelo == "negro" &&
  (personas[0].aficiones.includes("comer") ||
    personas[0].aficiones.includes("dormir")) &&
  ((anyoActual - personas[0].anyoNacimiento < 5 &&
    anyoActual - personas[0].dni.anyoExpedicion > 2) ||
    (anyoActual - personas[0].anyoNacimiento < 30 &&
      anyoActual - personas[0].dni.anyoExpedicion > 5) ||
    (anyoActual - personas[0].anyoNacimiento < 70 &&
      anyoActual - personas[0].dni.anyoExpedicion > 10))
) {
  console.log(
    `${personas[0].nombre} nació en ${personas[0].dni.lugarNacimento}`
  );
}
if (
  personas[1].colorPelo == "negro" &&
  (personas[1].aficiones.includes("comer") ||
    personas[1].aficiones.includes("dormir")) &&
  ((anyoActual - personas[1].anyoNacimiento < 5 &&
    anyoActual - personas[1].dni.anyoExpedicion > 2) ||
    (anyoActual - personas[1].anyoNacimiento < 30 &&
      anyoActual - personas[1].dni.anyoExpedicion > 5) ||
    (anyoActual - personas[1].anyoNacimiento < 70 &&
      anyoActual - personas[1].dni.anyoExpedicion > 10))
) {
  console.log(
    `${personas[1].nombre} nació en ${personas[1].dni.lugarNacimento}`
  );
}
if (
  personas[2].colorPelo == "negro" &&
  (personas[2].aficiones.includes("comer") ||
    personas[2].aficiones.includes("dormir")) &&
  ((anyoActual - personas[2].anyoNacimiento < 5 &&
    anyoActual - personas[2].dni.anyoExpedicion > 2) ||
    (anyoActual - personas[2].anyoNacimiento < 30 &&
      anyoActual - personas[2].dni.anyoExpedicion > 5) ||
    (anyoActual - personas[2].anyoNacimiento < 70 &&
      anyoActual - personas[2].dni.anyoExpedicion > 10))
) {
  console.log(
    `${personas[2].nombre} nació en ${personas[2].dni.lugarNacimento}`
  );
}
if (
  personas[3].colorPelo == "negro" &&
  (personas[3].aficiones.includes("comer") ||
    personas[3].aficiones.includes("dormir")) &&
  ((anyoActual - personas[3].anyoNacimiento < 5 &&
    anyoActual - personas[3].dni.anyoExpedicion > 2) ||
    (anyoActual - personas[3].anyoNacimiento < 30 &&
      anyoActual - personas[3].dni.anyoExpedicion > 5) ||
    (anyoActual - personas[3].anyoNacimiento < 70 &&
      anyoActual - personas[3].dni.anyoExpedicion > 10))
) {
  console.log(
    `${personas[3].nombre} nació en ${personas[3].dni.lugarNacimento}`
  );
}

console.log("");
console.log("METODO 2");
// * METODO 2

let nacidos = personas
  .map((persona) => {
    let edad = anyoActual - persona.anyoNacimiento;
    let caducidad = anyoActual - persona.dni.anyoExpedicion;

    if (
      persona.colorPelo == "negro" &&
      (persona.aficiones.includes("comer") ||
        persona.aficiones.includes("dormir")) &&
      ((edad < 5 && caducidad > 2) ||
        (edad < 30 && caducidad > 5) ||
        (edad < 70 && caducidad > 10))
    ) {
      return persona.dni.lugarNacimento;
    }
  })
  .filter(Boolean);
console.log(nacidos);
