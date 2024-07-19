import { Vector } from "./vector";

let vector = new Vector(10,100);
let v1 = new Vector(10,100);

console.log('Vector');
vector.print();
console.log('v1');
v1.print();

console.log('SUMA DE VECTORES');
console.log(vector.add(v1));

console.log('RESTA DE VECTORES');
console.log(vector.subs(v1));

console.log('MULTIPLICACIÓN DE VECTORES');
console.log(vector.mult(v1));

console.log('MULTIPLICACIÓN DE NUMERO');
console.log(vector.multNumber(8));