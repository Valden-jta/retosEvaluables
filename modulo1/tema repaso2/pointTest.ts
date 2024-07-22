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


