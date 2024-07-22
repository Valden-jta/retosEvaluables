// 1. Crear el fichero point.ts.
// 2. Dicho fichero debe contener la clase Point con los siguientes atributos privados:

// • x: number
// • y: number

// 3. El constructor de la clase debe tener los mismos parámetros de entrada que atributos.
// 4. Crear los métodos setters y getters para todos los atributos de la clase.
// 5. Crear un método toString() que convierta a texto las coordenadas del

export class Point {
  // atributos
  private _x: number;
  private _y: number;

  // constructor
  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  // getters
  public get x(): number {
    return this._x;
  }
  public get y(): number {
    return this._y;
  }

  // setters
  public set x(x: number) {
    this._x = x;
  }
  public set y(y: number) {
    this._y = y;
  }

  // m. públicos
  public toString(): string {
    return `(${this._x.toString(10)},${this._y.toString(10)})`;
  }

  public distanceToOrigin(): number {
    // Distancia = √((x2 )^2 + (y2)^2)
    let distance: number = 0;
    return (distance = Math.sqrt(Math.pow(this._x, 2) + Math.pow(this._y, 2)));
  }

  public calculateDistance(anotherPoint: Point): number {
    // Distancia = √((x2 - x1)^2 + (y2 - y1)^2)
    let distance: number = 0;
    return (distance = Math.sqrt(
      Math.pow(anotherPoint.x - this._x, 2) +
        Math.pow(anotherPoint.y - this._y, 2)
    ));
  }

  public calculateQuadrant(): number {
    let quadrant: number = 0;

    this._x > 0 && this._y > 0
      ? (quadrant = 1)
      : this._x < 0 && this._y > 0
      ? (quadrant = 2)
      : this._x < 0 && this._y < 0
      ? (quadrant = 3)
      : this._x > 0 && this._y < 0
      ? (quadrant = 4)
      : quadrant;

    return quadrant;
  }

  //   public calculateNearest(points: Point[]): Point {
  //     let nearestPointDistance: number = this.calculateDistance(points[0]);
  //     let nearesPoint: Point = points[0];
  //     for (let i = 0; i < points.length; i++) {
  //       let currentPointDistance: number = this.calculateDistance(points[i]);
  //       if (currentPointDistance < nearestPointDistance) {
  //         nearestPointDistance = currentPointDistance;
  //         nearesPoint = points[i];
  //       }
  //     }
  //     return nearesPoint;
  //   }
  public calculateNearest(points: Point[]): Point {
    let nearestPointDistance: number = this.calculateDistance(points[0]);
    let nearestPoint: Point = points[0];
    points.forEach((point) => {
      let currentPointDistance: number = this.calculateDistance(point);
      if (currentPointDistance < nearestPointDistance) {
        nearestPointDistance = currentPointDistance;
        nearestPoint = point;
      }
    });
    return nearestPoint;
  }
}
