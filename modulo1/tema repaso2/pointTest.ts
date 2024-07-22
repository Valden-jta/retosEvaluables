// 6. En otro fichero denominado pointTest.ts importar la clase Point.
// 7. Crear un nuevo objeto myPoint de la clase Point, en el fichero pointTest.ts, y probar todos sus métodos. Subir los cambios a GitHub.

import { Point } from "./point";

let point1:Point = new Point(30,100);

console.log(point1.x);
console.log(point1.y);
console.log(point1.toString());

console.log('--- set ---');
point1.x = 50;
point1.y = 50;
console.log(point1.toString());

console.log('--- Distancia al origen ---');
console.log(point1.distanceToOrigin());


console.log('--- Distancia al punto 23,132 ---');
let point2:Point = new Point(-23,132);
console.log(point1.calculateDistance(point2));

console.log('--- En que cuadrante esta el punto ---');
console.log("2 | 1\n- 0 -\n3 | 4");
console.log('point:1 ' + point1.calculateQuadrant());
console.log('point:1 ' + point2.calculateQuadrant());

console.log('--- Cual es el punto más cercano a point1 ---');
let points = [new Point(10,18),new Point(16,-12),new Point(-9,10),new Point(-15,-7)];
console.log(point1.calculateNearest(points));
