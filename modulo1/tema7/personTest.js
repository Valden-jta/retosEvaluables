const {Person} = require('./person.js');  // como Person es una clase, al importar tiene el formato de un objeto, por lo que se le añaden las llaves para poder acceder a la clase en si.

let javi = new Person("Javier", "de la Torre Aragón", 1987, "rubio", 82, 172, [
  "senderismo",
  "programacion",
  "cerveza",
]);

console.log("IMC");
console.log(javi.imc());
console.log("Edad");
console.log(javi.edad(javi.yearOfBirth));
console.log("Información completa");
javi.printAll();
console.log("Hobbies");
javi.printHobbies();
