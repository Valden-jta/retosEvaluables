class Person {
    // constructor
    constructor(nombre, apellido, yearOfBirth, colorPelo, peso, altura, hobbies) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.yearOfBirth = yearOfBirth;
      this.colorPelo = colorPelo;
      this.peso = peso;
      this.altura = altura;
      this.hobbies = hobbies;
    }
  
    // métodos
  
    imc() {
      let imc = Math.floor(this.peso / (Math.pow(this.altura, 2) / 100000));
      switch (true) {
        case imc < 185:
          return `El IMC de ${this.nombre} es de: ${imc}, y esta por debajo de tu peso ideal.`;
          break;
        case 185 <= imc && imc < 249:
          return `El IMC de ${this.nombre} es de: ${imc}, y esta en tu peso ideal.`;
          break;
        case 249 <= imc && imc < 299:
          return `El IMC de ${this.nombre} es de: ${imc}, y tiene obesidad grado I.`;
          break;
        case 300 <= imc && imc < 349:
          return `El IMC de ${this.nombre} es de: ${imc}, y tiene obesidad grado II.`;
          break;
        case 350 <= imc && imc < 399:
          return `El IMC de ${this.nombre} es de: ${imc}, y tiene obesidad grado III.`;
          break;
        default:
          return `${this.nombre} tiene obesidad mórbida`;
          break;
      }
    }
  
    edad() {  
      let edad = new Date().getFullYear() - this.yearOfBirth;
      return edad;
    }
  
    printAll() {
      console.log(`nombre - ${this.nombre}`);
      console.log(`apellido - ${this.apellido}`);
      console.log(`año de nacimiento - ${this.yearOfBirth}`);
      console.log(`color de pelo - ${this.colorPelo}`);
      console.log(`peso - ${this.peso}`);
      console.log(`altura - ${this.altura}`);
      console.log(`hobbies - ${this.hobbies}`);
    }
  
    printHobbies() {
      console.log(this.hobbies);
    }
  }
  module.exports = {Person};
  