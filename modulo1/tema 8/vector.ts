export class Vector 
{
    // ATRIBUTOS
    private _elements:number[];

    // CONSTRUCTOR
    constructor(n:number, k:number) {
        this._elements = new Array(n);
        for(let i = 0; i < n; i++) {
            this._elements[i] = Math.floor(Math.random()*k)
        }
        //for..of
        // for (let element of this._elements) {
        // element = Math.floor(Math.random()*k)
        // }

        // .map
        // this._elements.map(() => Math.floor(Math.random()*k))
    }
    // MÉTODOS PÚBLICOS
    print():void {
        console.log(this._elements)
    }

    add(v1:Vector):Vector {
        let add:Vector = new Vector(this._elements.length, 0);
        for(let i = 0; i < this._elements.length; i++){
            add._elements[i]= this._elements[i] + v1._elements[i];
        }
        // .map
        // add._elements = this._elements.map((valor, indice) => valor + v1._elements[indice]) 
        return add;
    }

    subs(v1:Vector):Vector {
        let subs:Vector = new Vector(this._elements.length, 0);
        for(let i = 0; i < this._elements.length; i++){
            subs._elements[i] = this._elements[i] - v1._elements[i];
        }
        // .map
        // subs._elements = this._elements.map((valor, indice) => valor - v1._elements[indice])  
        return subs;
    }

    mult(v1:Vector):Vector {
        let mult:Vector = new Vector(this._elements.length, 0);
        for(let i = 0; i < this._elements.length; i++){
            mult._elements[i] = this._elements[i] * v1._elements[i];
        }
        // .map
        // mult._elements = this._elements.map((valor, indice) => valor * v1._elements[indice]) 
        return mult;
    }

    multNumber(n:number):Vector {
        let multNumber = new Vector(this._elements.length, 0)
        for(let i = 0; i <this._elements.length; i++) {
            multNumber._elements[i] = this._elements[i] * n
        }
        // .map
        // multNumber._elements = this._elements.map(valor => valor * n) 
        return  multNumber
    }
}