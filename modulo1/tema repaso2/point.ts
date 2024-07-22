// 1. Crear el fichero point.ts.
// 2. Dicho fichero debe contener la clase Point con los siguientes atributos privados:

    // • x: number
    // • y: number

// 3. El constructor de la clase debe tener los mismos parámetros de entrada que atributos.
// 4. Crear los métodos setters y getters para todos los atributos de la clase.
// 5. Crear un método toString() que convierta a texto las coordenadas del

export class Point 
{
    // atributos
    private _x: number;
    private _y: number;

    // constructor
    constructor(x:number, y:number) {
        this._x = x;
        this._y = y;
    }

    // getters
    public get x():number {
        return this._x;
    }
    public get y():number {
        return this._y;
    }

    // setters
    public set x(x:number) {
        this._x = x;
    }
    public set y(y:number) {
        this._y = y;
    }

    // m. públicos
    public toString():string {
        return `(${this._x.toString(10)},${this._y.toString(10)})`;
    }
}