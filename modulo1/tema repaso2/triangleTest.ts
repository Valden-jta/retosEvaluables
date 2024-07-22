import { Point } from "./point";
import { Triangle } from "./triangle";

let triangulo: Triangle = new Triangle(
  new Point(0, 0),
  new Point(0, 15),
  new Point(-30, 0)
);
console.log(triangulo.vertex1);
console.log(triangulo.vertex2);
console.log(triangulo.vertex3);

console.log("Longitud de los lados");
console.log(triangulo.calculateLengthSides());

console.log("Cambio de puntos");
triangulo.vertex1 = new Point(0, -20);
triangulo.vertex2 = new Point(-10, 0);
triangulo.vertex3 = new Point(30, 0);
console.log(triangulo.calculateLengthSides());
