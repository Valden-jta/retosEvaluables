import { Point } from "./point";

export class Triangle {
  // atributos
  private _vertex1: Point;
  private _vertex2: Point;
  private _vertex3: Point;

  // constructor
  constructor(v1: Point, v2: Point, v3: Point) {
    this._vertex1 = v1;
    this._vertex2 = v2;
    this._vertex3 = v3;
  }

  // getters
  public get vertex1(): Point {
    return this._vertex1;
  }
  public get vertex2(): Point {
    return this._vertex2;
  }
  public get vertex3(): Point {
    return this._vertex3;
  }

  // setters
  public set vertex1(v1: Point) {
    this._vertex1 = v1;
  }
  public set vertex2(v2: Point) {
    this._vertex2 = v2;
  }
  public set vertex3(v3: Point) {
    this._vertex3 = v3;
  }

  // m. públicos
  public calculateLengthSides(): number[] {
    let sides: number[] = [
      this._vertex1.calculateDistance(this._vertex2),
      this._vertex2.calculateDistance(this._vertex3),
      this._vertex3.calculateDistance(this._vertex1),
    ];
    return sides;
  }
}
